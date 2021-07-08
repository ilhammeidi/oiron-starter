import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
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
    <Paper title={t('common:blog_subscribe')} icon="ion-ios-wifi-outline" colorMode whiteBg noMargin desc="Get lates update from us">
      <div className={classes.subscribeForm}>
        <FormControl>
          <TextField
            label="Email"
            value={email}
            onChange={handleChange}
            margin="normal"
            classes={{
              root: classes.whiteInputRoot,
              input: classes.whiteInputInput,
            }}
          />
        </FormControl>
        <Fab size="small" color="secondary" type="submit">
          <Send />
        </Fab>
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
