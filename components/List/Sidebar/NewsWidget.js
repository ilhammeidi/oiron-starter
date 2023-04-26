import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../list-style';

function NewsWidget() {
  const { classes } = useStyles();
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
