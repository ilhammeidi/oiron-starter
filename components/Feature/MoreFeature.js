import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useStyles from './feature-style';
import { useTextAlign } from '~/theme/common';

function MainFeature() {
  const classes = useStyles();
  const align = useTextAlign();

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={clsx(classes.featureMore)}>
      <Grid container className={classes.featureItem} spacing={6}>
        <Grid md={6} xs={12} item>
          <div>
            <ScrollAnimation animateIn="fadeInLeft" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" delay={300} duration={0.6}>
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <ScrollAnimation animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={500} duration={0.6}>
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
            <ScrollAnimation animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" delay={500} duration={0.6}>
              <figure className={classes.img}>
                <img src="https://source.unsplash.com/random" alt="img" />
              </figure>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <ScrollAnimation animateIn="fadeInRight" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={300} duration={0.6}>
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
            <div className={clsx(align.textCenter, classes.featureItem, classes.last)}>
              <ScrollAnimation animateIn="fadeInUp" duration={0.6}>
                <Typography variant="h3" className={classes.title}>
                  Lorem ipsum dolor
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={300} duration={0.6}>
                <Typography variant="body1" className={classes.text}>
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateIn="zoomIn" delay={300} duration={0.6}>
                <div className={classes.deco2} />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={500} duration={0.6}>
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
