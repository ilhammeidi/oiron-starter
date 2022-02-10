import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function Banner() {
  const classes = useStyles();
  const text = useText();

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.inner}>
        <Container>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item sm={6}>
              <Box px={{ sm: 5 }}>
                <div className={classes.text}>
                  <h4 className={text.title2}>Pellentesque habitant morbi tristique senectus</h4>
                  <h5 className={text.subtitle2}>
                    {'Multiple lines of text that form the lede,informing new readers quickly and efficiently about what\'s most interesting in this posts contents'}
                  </h5>
                </div>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box px={{ sm: 5 }}>
                <div className={classes.img}>
                  <img src="/images/starter/Illustration.png" alt="illustration" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
