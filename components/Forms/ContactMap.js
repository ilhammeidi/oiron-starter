import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react18';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './form-style';
import Checkbox from './Checkbox';

function BubleMark() {
  const classes = useStyles();
  return (
    <div className={classes.bubelWrap}>
      <div className={classes.buble}>
        <Typography variant="h6" gutterBottom>
          Head Quarter
        </Typography>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography>
              <PhoneIcon className={classes.icon} />
              +98 765 432 10
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography>
              <EmailIcon className={classes.icon} />
              hello@luxi.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <LocationIcon className={classes.icon} />
              Lorem ipsum street Block C - Vestibullum Building
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function MapContainer(props) {
  const [activeMarker, setActive] = useState({});
  const [showingInfoWindow, setShow] = useState(false);
  const { google } = props;
  // eslint-disable-next-line
  const onMarkerClick = (props, marker) => {
    setActive(marker);
    setShow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShow(false);
      setActive(null);
    }
  };

  return (
    <Map
      google={google}
      onClick={onMapClicked}
      style={{ width: '100%', height: '915px', position: 'relative' }}
      initialCenter={{
        lat: 37.759703,
        lng: -122.428093
      }}
      zoom={14}
    >
      <Marker
        onClick={onMarkerClick}
        position={{ lat: 37.759703, lng: -122.428093 }}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <div>
          <BubleMark />
        </div>
      </InfoWindow>
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);

function ContactMap(props) {
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const { full } = props;
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
    <div className={classes.pageWrap}>
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
      <div className={classes.innerWrap}>
        <Container>
          <Grid container alignItems="center">
            <Grid item md={6} xs={12} className={classes.wrapDeco}>
              <Paper className={clsx(classes.formBox, full ? classes.mapForm : '')}>
                <div className={classes.fullFromWrap}>
                  <div className={!isMobile ? classes.form : ''}>
                    <h4 className={clsx(align.textCenter, text.title2)}>
                      {t('contact_title2')}
                    </h4>
                    <p className={clsx(align.textCenter, text.subtitle2)}>
                      {t('contact_subtitle')}
                    </p>
                    <ValidatorForm
                      onSubmit={handleSubmit}
                      onError={errors => console.log(errors)}
                    >
                      <Box py={3}>
                        <Grid container spacing={6}>
                          <Grid item xs={12}>
                            <TextValidator
                              className={classes.input}
                              fullWidth
                              label={t('form_name')}
                              onChange={handleChange('name')}
                              name="Name"
                              value={values.name}
                              validators={['required']}
                              errorMessages={['This field is required']}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextValidator
                              className={classes.input}
                              fullWidth
                              label={t('form_email')}
                              onChange={handleChange('email')}
                              name="Email"
                              value={values.email}
                              validators={['required', 'isEmail']}
                              errorMessages={['This field is required', 'email is not valid']}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextValidator
                              className={classes.input}
                              fullWidth
                              label={t('form_phone')}
                              onChange={handleChange('phone')}
                              name="Phone"
                              value={values.phone}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextValidator
                              multiline
                              rows="6"
                              fullWidth
                              className={classes.input}
                              label={t('form_message')}
                              onChange={handleChange('message')}
                              name="Message"
                              value={values.message}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <FormControlLabel
                        className={classes.checkArea}
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
                          <span className={text.paragraph}>
                            {t('form_terms')}
                            <br />
                            <a href="#">
                              {t('form_privacy')}
                            </a>
                          </span>
                        )}
                      />
                      <div className={classes.btnArea}>
                        <Button variant="contained" fullWidth type="submit" color="primary" size="large">
                          {t('form_send')}
                          &nbsp;
                          <SendIcon className={classes.rightIcon} />
                        </Button>
                      </div>
                    </ValidatorForm>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className={clsx(classes.map, full ? classes.full : '')} elevation={0}>
                <MapWithAMarker />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

ContactMap.propTypes = {
  full: PropTypes.bool
};

ContactMap.defaultProps = {
  full: false
};

export default ContactMap;
