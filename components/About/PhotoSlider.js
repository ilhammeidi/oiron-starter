import React, { useState, useEffect, useRef } from 'react';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Lightbox from 'react-image-lightbox';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import MediaCard from '../Cards/MediaCard';
import useStyles from './about-style';

function PhotoSlider() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');

  // Image Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const imgData = [
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random'
  ];

  // Slider Carousel
  const slider = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNext = () => {
    slider.current.slickNext();
  };

  const handlePrev = () => {
    slider.current.slickPrev();
  };

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + imgData.length - 1) % imgData.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + imgData.length + 1) % imgData.length);
  }

  return (
    <div>
      {open && (
        <Lightbox
          mainSrc={imgData[photoIndex]}
          nextSrc={imgData[(photoIndex + 1) % imgData.length]}
          prevSrc={imgData[(photoIndex + 1) % imgData.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container>
        <Box mb={3}>
          <h4 className={text.title2}>
            {t('about_gallery')}
          </h4>
        </Box>
        <p className={text.subtitle2}>
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {loaded && (
          <div className={classes.carousel}>
            <IconButton
              onClick={() => handlePrev()}
              className={clsx(classes.nav, classes.prev)}
            >
              <ArrowBackIcon />
            </IconButton>
            <Carousel ref={slider} {...settings}>
              {imgData.map((item, index) => (
                <ButtonBase
                  key={index.toString()}
                  className={classes.item}
                  onClick={() => showPopup(index)}
                >
                  <Box px={{ sm: 1 }}>
                    <MediaCard
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="photo"
                      thumb={item}
                      href="#!"
                    />
                  </Box>
                </ButtonBase>
              ))}
            </Carousel>
            <IconButton
              onClick={() => handleNext()}
              className={clsx(classes.nav, classes.next)}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </Container>
    </div>
  );
}

export default PhotoSlider;
