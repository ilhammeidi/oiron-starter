import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import ProfileCard from '../Cards/ProfileCard';
import useStyles from './about-style';

function PhotoSlider() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');

  const [loaded, setLoaded] = useState(false);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
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

  return (
    <div className={clsx(classes.teamRoot, classes.bgWrapper)}>
      <Container>
        <Box mb={3}>
          <h4 className={text.title2}>
            {t('about_team')}
          </h4>
        </Box>
        <p className={text.subtitle2}>
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Container>
      <Box mt={5}>
        {loaded && (
          <div className={classes.carousel}>
            <Carousel {...settings}>
              {[...Array(6)].map((e, index) => (
                <div
                  key={index.toString()}
                  className={classes.item}
                >
                  <Box px={1}>
                    <ProfileCard
                      connection={100}
                      favorites={10}
                      albums={12}
                      cover="https://source.unsplash.com/random"
                      name="John Dalton"
                      title="Web Designer"
                      type="over"
                      orientation="landscape"
                      avatar="/images/avatars/pp_girl3.svg"
                    />
                  </Box>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </Box>
    </div>
  );
}

export default PhotoSlider;
