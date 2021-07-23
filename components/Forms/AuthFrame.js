import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import brand from '~/public/text/brand';
import routerLink from '~/public/text/link';
import logo from '~/public/images/logo-starter.svg';
import { useText } from '~/theme/common';
import useStyles from './form-style';

function AuthFrame(props) {
  const classes = useStyles();
  const text = useText();

  const {
    children, title,
    subtitle, type
  } = props;

  return (
    <div className={classes.pageWrap}>
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routerLink.starter.home}>
            <img src={logo} alt="logo" />
            <Typography component="span">
              {brand.starter.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <div className={classes.authFrame}>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <Paper className={classes.formBox}>
              <div className={classes.formWrap}>
                {children}
              </div>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Hidden smDown>
              <div className={classes.greeting}>
                <h4 className={text.title2}>
                  { title }
                </h4>
                <h6 className={text.subtitle2}>
                  { subtitle }
                </h6>
                <div className={classes.img}>
                  {type === 'login' ? (
                    <img src="/images/starter/Illustration.png" alt="illustration" />
                  ) : (
                    <img src="/images/starter/Illustration.png" alt="illustration" />
                  )}
                </div>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  type: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
  type: '',
};

export default AuthFrame;
