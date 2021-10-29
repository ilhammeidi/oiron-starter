import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useText } from '~/theme/common';
import useStyles from './form-style';

function AuthFrame(props) {
  const classes = useStyles();
  const text = useText();
  // Media query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const {
    children, title,
    subtitle, type
  } = props;

  return (
    <div className={classes.pageWrap}>
      <div className={classes.authFrame}>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <Paper className={classes.formBox}>
              <div className={classes.formWrap}>
                {children}
              </div>
            </Paper>
          </Grid>
          {isDesktop && (
            <Grid item md={6} xs={12}>
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
            </Grid>
          )}
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
