import React from 'react';
import Container from '@mui/material/Container';
import MainFeature from './MainFeature';
import MoreFeature from './MoreFeature';
import useStyles from './feature-style';

function Feature() {
  const { classes } = useStyles();
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
