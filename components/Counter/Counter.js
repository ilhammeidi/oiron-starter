import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import EcoIcon from '@material-ui/icons/Eco';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './counter-style';

function Counter(props) {
  const classes = useStyles();
  const { dark } = props;
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };
  return (
    <div className={clsx(classes.counterWrap, dark ? classes.dark : '')}>
      <Container maxWidth="md">
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={300} afterAnimatedIn={handlePlay}>
          <Grid container justifyContent="center" alignItems="center" className={classes.root} spacing={6}>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <AcUnitIcon />
                <div className={classes.text}>
                  <Typography variant="h4">
                    {countup(123, play)}
                  </Typography>
                  <Typography variant="h6">
                    Lorem Ipsum dolor
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <ColorLensIcon />
                <div className={classes.text}>
                  <Typography variant="h4">
                    {countup(456, play)}
                  </Typography>
                  <Typography variant="h6">
                    Pellentesque ac bibendum
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <EcoIcon />
                <div className={classes.text}>
                  <Typography variant="h4">
                    {countup(789, play)}
                  </Typography>
                  <Typography variant="h6">
                    Consectetur adipiscing
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  dark: PropTypes.bool,
};

Counter.defaultProps = {
  dark: false,
};

export default Counter;
