import React, { useState } from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function Progress() {
  const classes = useStyles();
  const text = useText();

  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 200);
    }
  };

  return (
    <div className={classes.progressWrap}>
      <ScrollAnimation animateOnce animateIn="fadeIn" delay={400} duration={0.3} afterAnimatedIn={handlePlay}>
        <ul>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-wand" />
              <Typography variant="h6" className={text.subtitle2}>UI Interface Design</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 80 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-social-dribbble-outline" />
              <Typography variant="h6" className={text.subtitle2}>Icon Design</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 70 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-ios-world-outline" />
              <Typography variant="h6" className={text.subtitle2}>HTML Prototyping</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 60 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-ios-camera-outline" />
              <Typography variant="h6" className={text.subtitle2}>Photo Editing</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 90 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-ios-snowy" />
              <Typography variant="h6" className={text.subtitle2}>Graphic Illustrations</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 80 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
        </ul>
      </ScrollAnimation>
    </div>
  );
}

export default Progress;
