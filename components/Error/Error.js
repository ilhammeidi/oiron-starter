import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'next-i18next';
import useStyles from './error-style';

function Error(props) {
  const classes = useStyles();
  const { errCode, text } = props;
  const { t } = useTranslation('common');

  return (
    <div className={classes.errorWrap}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.illustration}>
                <img src="/images/starter/Illustration.png" alt="illustration" />
              </div>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h1">
                <strong>
                  {errCode}
                </strong>
              </Typography>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                {t('404_subtitle')}
              </Typography>
              <Button variant="outlined" color="primary" href="/" size="large" className={classes.button}>
                {t('back')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,

};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
