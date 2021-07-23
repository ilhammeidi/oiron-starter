import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import IosLeafOutline from 'react-ionicons/lib/IosLeafOutline';
import IosBulbOutline from 'react-ionicons/lib/IosBulbOutline';
import IosIonitronOutline from 'react-ionicons/lib/IosIonitronOutline';
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
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 500);
  };
  return (
    <div className={clsx(classes.counterWrap, dark ? classes.dark : '')}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" className={classes.root} spacing={6}>
          <Grid md={4} item>
            <ReactWOW animation="fadeIn" offset={300} callback={handlePlay}>
              <div className={classes.counterItem}>
                <IosLeafOutline />
                <div className={classes.text}>
                  <Typography variant="h4">
                    {countup(123, play)}
                  </Typography>
                  <Typography variant="h6">
                    Lorem Ipsum dolor
                  </Typography>
                </div>
              </div>
            </ReactWOW>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <IosBulbOutline />
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
              <IosIonitronOutline />
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
