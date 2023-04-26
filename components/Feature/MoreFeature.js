import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useStyles from './feature-style';
import { useTextAlign } from '~/theme/common';

function MainFeature() {
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={cx(classes.featureMore)}>
      <Grid container className={classes.featureItem} spacing={6}>
        <Grid md={6} xs={12} item>
          <div>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" delay={300} duration={0.6}>
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInRight" delay={500} duration={0.6}>
              <figure className={classes.img}>
                <img src="https://source.unsplash.com/random" alt="img" />
              </figure>
            </ScrollAnimation>
          </div>
        </Grid>
      </Grid>
      <Grid container direction={isTablet ? 'column-reverse' : 'row'} className={classes.featureItem} spacing={6}>
        <Grid md={6} xs={12} item>
          <div>
            <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" delay={500} duration={0.6}>
              <figure className={classes.img}>
                <img src="https://source.unsplash.com/random" alt="img" />
              </figure>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <ScrollAnimation animateOnce animateIn="fadeInRight" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInRight" delay={300} duration={0.6}>
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={12} item>
          <div className={classes.featureMore}>
            <div className={cx(align.textCenter, classes.featureItem, classes.last)}>
              <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.6}>
                <Typography variant="h3" className={classes.title}>
                  Lorem ipsum dolor
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp" delay={300} duration={0.6}>
                <Typography variant="body1" className={classes.text}>
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
                <div className={classes.deco2} />
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp" delay={500} duration={0.6}>
                <figure className={classes.imgFull}>
                  <img src="https://source.unsplash.com/random" alt="img" />
                </figure>
              </ScrollAnimation>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
