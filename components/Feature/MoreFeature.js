import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import useStyles from './feature-style';
import { useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';

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
            <ReactWOW animation="fadeInLeft" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ReactWOW>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.5s" duration="0.6s">
              <figure className={classes.img}>
                <img src="https://source.unsplash.com/random" alt="img" />
              </figure>
            </ReactWOW>
          </div>
        </Grid>
      </Grid>
      <Grid container direction={isTablet ? 'column-reverse' : 'row'} className={classes.featureItem} spacing={6}>
        <Grid md={6} xs={12} item>
          <div>
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.5s" duration="0.6s">
              <figure className={classes.img}>
                <img src="https://source.unsplash.com/random" alt="img" />
              </figure>
            </ReactWOW>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <ReactWOW animation="fadeInRight" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ReactWOW>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={12} item>
          <div className={classes.featureMore}>
            <div className={clsx(align.textCenter, classes.featureItem, classes.last)}>
              <ReactWOW animation="fadeInUp" duration="0.6s">
                <Typography variant="h3" className={classes.title}>
                  Lorem ipsum dolor
                </Typography>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay="0.3s" duration="0.6s">
                <Typography variant="body1" className={classes.text}>
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </Typography>
              </ReactWOW>
              <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
                <div className={classes.deco2} />
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay="0.5s" duration="0.6s">
                <figure className={classes.imgFull}>
                  <img src="https://source.unsplash.com/random" alt="img" />
                </figure>
              </ReactWOW>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
