import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Lightbox from 'react-image-lightbox';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './list-style';

function Detail() {
  const classes = useStyles();
  const text = useText();
  const [loaded, setLoaded] = useState(false);
  // Media QUery
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { t } = useTranslation('common');

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    autoplay: false
  };

  // Image Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const imgs = [
    imgAPI.photo[2],
    imgAPI.photo[2],
    imgAPI.photo[2],
    imgAPI.photo[2],
    imgAPI.photo[2],
    imgAPI.photo[2]
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + imgs.length - 1) % imgs.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + imgs.length + 1) % imgs.length);
  }

  return (
    <div>
      {open && (
        <Lightbox
          mainSrc={imgs[photoIndex]}
          nextSrc={imgs[(photoIndex + 1) % imgs.length]}
          prevSrc={imgs[(photoIndex + 1) % imgs.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Grid container spacing={isDesktop ? 6 : 2} justifyContent="center">
        <Grid item lg={4} md={5} sm={5} xs={12}>
          <div className={classes.carouselWrap}>
            {loaded && (
              <div className={classes.carousel}>
                <Carousel {...settings}>
                  {imgs.map((e, index) => (
                    <div
                      key={index.toString()}
                      className={classes.item}
                    >
                      <ButtonBase href="#!" onClick={() => showPopup(index)}>
                        <div className={classes.figure}>
                          <div style={{ backgroundImage: `url(${imgs[index]})` }} alt="thumb" className={classes.imgDetail} />
                          <Icon className={classes.zoomIcon}>zoom_in</Icon>
                        </div>
                      </ButtonBase>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </Grid>
        <Grid item lg={6} md={7} sm={7} xs={12}>
          <Box px={2} py={6}>
            <div className={classes.text}>
              <Typography variant="h4">
                <span className={text.subtitle2}>
                  Vivamus sit amet
                </span>
                The Lorem Ipsum Dolor Sit Amet
              </Typography>
              <div className={classes.property}>
                <span className={classes.star}>
                  {[...Array(5)].map((e, indexStar) => (
                    <Icon className={classes.starIcon} key={indexStar.toString()}>star</Icon>
                  ))}
                </span>
                5.0
                <span className={classes.divider} />
                213 Sales
              </div>
              <article className={classes.desc}>
                <Typography component="h6" className={text.paragraph}>
                  Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus.
                </Typography>
              </article>
              <section className={classes.btnArea}>
                <Button className={classes.btnText} color="secondary">
                  {t('list_whislist')}
                </Button>
                <Button variant="contained" size="large" color="primary">
                  {t('list_cart')}
                </Button>
              </section>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Detail;
