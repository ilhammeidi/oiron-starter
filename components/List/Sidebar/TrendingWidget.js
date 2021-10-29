import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useText } from '~/theme/common';
import Paper from '../../Paper';
import useStyles from '../list-style';

function TrendingWidget() {
  const classes = useStyles();
  const text = useText();

  const trending = [{
    title: 'Vestibulum faucibus',
    share: 130
  },
  {
    title: 'Nulla eget lobortis lacus',
    share: 120
  },
  {
    title: 'Cras convallis',
    share: 100
  },
  {
    title: 'Quisque a consequat',
    share: 88
  },
  {
    title: 'Suspendisse',
    share: 90
  }];

  return (
    <Paper title="Trending now" icon="ion-arrow-graph-up-right" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.albumRoot}>
        <List component="nav">
          {trending.map((item, index) => (
            <ListItem key={index.toString()} button>
              <ListItemText
                primary={`${index + 1}. #${item.title}`}
                secondary={item.share + 'k Views'}
                classes={{
                  primary: text.bold
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

export default TrendingWidget;
