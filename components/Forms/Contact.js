import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useText, useTextAlign } from '~/theme/common';
import { withTranslation } from '~/i18n';
import Checkbox from './Checkbox';
import useStyles from './form-style';

function Contact(props) {
  const { t } = props;
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        classes={{
          anchorOriginTopRight: classes.notif
        }}
        action={(
          <IconButton onClick={handleClose} color="inherit" size="small">
            <CloseIcon />
          </IconButton>
        )}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <h3 className={clsx(text.title, align.textCenter)}>
        {t('common:contact_title2')}
      </h3>
      <p className={clsx(classes.desc, text.subtitle2, align.textCenter)}>
        {t('common:contact_subtitle')}
      </p>
      <Box mt={8} px={{ sm: 6 }}>
        <ValidatorForm
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >
          <Grid container spacing={6}>
            <Grid item sm={6} xs={12}>
              <TextValidator
                fullWidth
                className={classes.input}
                label={t('common:form_name')}
                onChange={handleChange('name')}
                name="Name"
                value={values.name}
                validators={['required']}
                errorMessages={['this field is required']}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextValidator
                fullWidth
                className={classes.input}
                label={t('common:form_email')}
                onChange={handleChange('email')}
                name="Email"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextValidator
                fullWidth
                className={classes.input}
                label={t('common:form_phone')}
                onChange={handleChange('phone')}
                name="Phone"
                value={values.phone}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextValidator
                fullWidth
                className={classes.input}
                label={t('common:form_company')}
                onChange={handleChange('company')}
                name="Company"
                value={values.company}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                multiline
                fullWidth
                rows="6"
                className={classes.input}
                label={t('common:form_message')}
                onChange={handleChange('message')}
                name="Message"
                value={values.message}
              />
            </Grid>
          </Grid>
          <div className={classes.btnArea}>
            <FormControlLabel
              control={(
                <Checkbox
                  validators={['isTruthy']}
                  errorMessages="This field is required"
                  checked={check}
                  value={check}
                  onChange={(e) => handleCheck(e)}
                  color="primary"
                />
              )}
              label={(
                <span>
                  {t('common:form_terms')}
                  <br />
                  <a href="#" className={classes.link}>
                    {t('common:form_privacy')}
                  </a>
                </span>
              )}
            />
            <Button variant="contained" type="submit" color="primary" size="large">
              {t('common:form_send')}
            </Button>
          </div>
        </ValidatorForm>
      </Box>
    </div>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(Contact);
