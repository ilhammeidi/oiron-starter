import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function SidebarBlog() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const { t } = useTranslation('common');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Paper title={t('blog_subscribe')} icon="ion-wifi" colorMode whiteBg noMargin desc="Get lates update from us">
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
          {t('btn_submit')}
        </Button>
      </div>
    </Paper>
  );
}

export default SidebarBlog;
