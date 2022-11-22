import React, { useState, useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [curSlide, setCurSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
          fade: true
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={classes.bannerWrap}>
      {loaded && (
        <div className={classes.carousel}>
          <Carousel
            {...settings}
            ref={slider}
            afterChange={handleAfterChange}
          >
            {[...Array(3)].map((e, index) => (
              <div key={index.toString()} className={classes.slide}>
                <div className={classes.inner}>
                  <Container>
                    <Grid>
                      <Grid item sm={7} lg={6} xs={12}>
                        <div className={classes.text}>
                          <h3 className={text.title}>
                            {t('starter-landing.banner_title')}
                          </h3>
                          <Typography variant="h5">
                            {t('starter-landing.banner_subtitle')}
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                  <div className={classes.img}>
                    <img src="/images/starter/Illustration.png" alt="illustration" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      <Hidden mdDown>
        <Container maxWidth="md">
          <nav className={classes.slideNav}>
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 0 ? classes.active : '')}
              onClick={() => gotoSlide(0)}
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 1 ? classes.active : '')}
              onClick={() => gotoSlide(1)}
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <ButtonBase
              className={clsx(classes.btnNav, curSlide === 2 ? classes.active : '')}
              onClick={() => gotoSlide(2)}
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </ButtonBase>
          </nav>
        </Container>
      </Hidden>
    </div>
  );
}

export default BannerSlider;
