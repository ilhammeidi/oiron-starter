import React, { useState } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/logo-starter.svg';
import brand from '~/public/text/brand';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './contact-style';

function Contact() {
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [openNotif, setNotif] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <Box mx={10} mt={5}>
              <div className={classes.logo}>
                <img src={logo} alt="logo" />
                {brand.starter.name}
              </div>
              <Typography>
                {t('starter-landing.banner_subtitle')}
              </Typography>
              <div className={classes.socmed}>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-facebook" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-instagram" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-twitter" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin} size="small">
                  <i className="ion-social-linkedin" />
                </IconButton>
              </div>
              <div className={classes.contact}>
                <Typography className={text.paragraph}>
                  {t('blog_phone')}
                  <br />
                  +12 345 678 90
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={text.paragraph}>
                  Skype
                  <br />
                  jenadoe.skype
                </Typography>
                <Box mt={8}>
                  <Typography variant="subtitle2" className={align.textCenter}>
                    &copy;&nbsp;
                    {brand.starter.footerText}
                  </Typography>
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={classes.formWrap}>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                key="top right"
                open={openNotif}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Message Sent</span>}
              />
              <Paper className={classes.formBox}>
                <Grid container spacing={6}>
                  <Grid item lg={5} xs={12}>
                    <h3 className={clsx(classes.title, text.title)}>
                      {t('contact_title2')}
                    </h3>
                  </Grid>
                  <Grid item lg={7} xs={12}>
                    <div className={classes.form}>
                      <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={errors => console.log(errors)}
                      >
                        <TextValidator
                          className={classes.input}
                          label={t('form_name')}
                          onChange={handleChange('name')}
                          name="Name"
                          value={values.name}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                        <TextValidator
                          className={classes.input}
                          label={t('form_email')}
                          onChange={handleChange('email')}
                          name="Email"
                          value={values.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['this field is required', 'email is not valid']}
                        />
                        <TextValidator
                          multiline
                          rows="6"
                          className={classes.input}
                          label={t('form_message')}
                          onChange={handleChange('message')}
                          name="Message"
                          value={values.message}
                        />
                        <div className={classes.btnArea}>
                          <Button variant="contained" type="submit" color="primary" size="large">
                            {t('form_send')}
                          </Button>
                        </div>
                      </ValidatorForm>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
