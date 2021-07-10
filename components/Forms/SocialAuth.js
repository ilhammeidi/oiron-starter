import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './form-style';

function SocialAuth() {
  const classes = useStyles();

  return (
    <section className={classes.socmedSideLogin}>
      <Button
        variant="contained"
        className={classes.naviBtn}
        type="button"
      >
        <i className="ion-social-facebook" />
        Facebook
      </Button>
      <Button
        variant="contained"
        className={classes.blueBtn}
        type="button"
      >
        <i className="ion-social-twitter" />
        Twitter
      </Button>
      <Button
        variant="contained"
        className={classes.redBtn}
        type="button"
      >
        <i className="ion-social-google" />
        Google
      </Button>
    </section>
  );
}


export default SocialAuth;
