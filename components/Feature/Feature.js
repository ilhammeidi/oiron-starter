import React from 'react';
import Container from '@material-ui/core/Container';
import MainFeature from './MainFeature';
import MoreFeature from './MoreFeature';
import useStyles from './feature-style';

function Feature() {
  const classes = useStyles();
  return (
    <div className={classes.featureWrap}>
      <Container>
        <MainFeature />
        <MoreFeature />
      </Container>
    </div>
  );
}

export default Feature;
