import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import { useTranslation } from 'next-i18next';
import useStyles from './subscribe-style';

function SubscribeForm() {
  const { t } = useTranslation('common');
  const { classes } = useStyles();
  const [values, setValues] = useState({
    email: '',
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.subscribeWrap}>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">
          {t('blog_subscribe_desc')}
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item sm={8} xs={12}>
              <TextField
                variant="standard"
                id="standard-email"
                label={t('form_email')}
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Button variant="contained" fullWidth={isMobile} color="primary" className={classes.button}>
                {t('blog_subscribe')}
                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default SubscribeForm;
