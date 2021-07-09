import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function SidebarBlog(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const { t } = props;

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Paper title={t('common:blog_subscribe')} icon="ion-wifi" colorMode whiteBg noMargin desc="Get lates update from us">
      <div className={classes.subscribeForm}>
        <FormControl>
          <TextField
            label="Email"
            value={email}
            onChange={handleChange}
            margin="normal"
            required
            classes={{
              root: classes.whiteInputRoot,
              input: classes.whiteInputInput,
              underline: classes.underline
            }}
          />
        </FormControl>
        <Button className={classes.invertBtn} size="small" variant="outlined" type="submit">
          {t('common:btn_submit')}
        </Button>
      </div>
    </Paper>
  );
}

SidebarBlog.propTypes = {
  t: PropTypes.func.isRequired,
};

SidebarBlog.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(SidebarBlog);
