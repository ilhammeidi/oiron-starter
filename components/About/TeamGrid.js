import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProfileCard from '../../components/Cards/ProfileCard';
import useStyles from './about-style';

function TeamGrid() {
  const classes = useStyles();

  return (
    <Grid className={classes.teamRoot}>
      {[...Array(9)].map((e, index) => (
        <Grid item key={index.toString()} md={4}>
          <Box pa={5}>
            <ProfileCard
              connection={100}
              favorites={10}
              albums={12}
              cover="https://source.unsplash.com/random"
              name="John Dalton"
              title="Web Designer"
              type="full"
              orientation="portrait"
            />
          </Box>
        </Grid>
      )]}
    </Grid>
  );
}

export default TeamGrid;
