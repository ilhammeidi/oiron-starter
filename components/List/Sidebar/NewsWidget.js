import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../list-style';

function NewsWidget() {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const news = [{
    img: 'https://source.unsplash.com/random',
    title: 'Vestibulum bibendum nisi eget magna',
    source: 'the-news.com'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Quisque a consequat ante',
    source: 'the-news.com'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Donec dignissim, odio ac imperdiet luctus',
    source: 'the-news.com'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Suspendisse eleifend nunc non',
    source: 'the-news.com'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'Vestibulum a massa vestibulum',
    source: 'the-news.com'
  }];

  return (
    <Paper title={t('blog_post')} icon="ion-ios-paper" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.albumRoot}>
        <List component="nav">
          {news.map((item, index) => (
            <ListItem key={index.toString()} button>
              <ListItemAvatar>
                <Avatar src={item.img} className={classes.thumb} variant="rounded" alt="thumb" />
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary={item.source} />
            </ListItem>
          ))}
        </List>
        <Grid container justifyContent="center">
          <Button fullWidth color="secondary">
            {t('btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default NewsWidget;
