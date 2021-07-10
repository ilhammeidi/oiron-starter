import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './blog-style';

function Headline() {
  const classes = useStyles();
  const text = useText();
  return (
    <Card className={classes.blogHeadline}>
      <CardActionArea href={link.starter.blogDetail}>
        <CardMedia className={classes.media} image="https://source.unsplash.com/random" />
        <CardContent>
          <span className={classes.anchorContent}>
            <span className={clsx(classes.headlineTitle, text.title)}>
              Pellentesque habitant morbi tristique senectus Proin pretium arcu eget.
            </span>
            <span className={clsx(classes.subtitle, text.subtitle)}>
              {"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this posts contents."}
            </span>
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Headline;
