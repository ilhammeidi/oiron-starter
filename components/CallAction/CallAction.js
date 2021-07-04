import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <Fragment>
      <Container fixed={isDesktop}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item md={9} xs={12}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('common:agency-landing.cta_title')}
                </Typography>
                <Typography display="block" component="div">
                  {t('common:agency-landing.cta_subtitle')}
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid container alignItems="center">
                  <Button size="large" variant="outlined" color="secondary" href="/contact" className={classes.button}>
                    {t('common:agency-landing.cta_btn')}
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </Fragment>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['agency-landing'])(CallAction);
