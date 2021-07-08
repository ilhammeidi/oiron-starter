import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from '../blog-style';

function Headline() {
  const classes = useStyles();
  const text = useText();
  return (
    <ButtonBase>
      <Card className={classes.blogHeadline}>
        <CardActionArea>
          <CardMedia image="https://source.unsplash.com/random" />
          <CardContent>
            <a href={link.starter.blogDetail} className={classes.anchorContent}>
              <Typography className={clsx(classes.headlineTitle, text.title)} gutterBottom component="span">
                Pellentesque habitant morbi tristique senectus Proin pretium arcu eget.
              </Typography>
              <Typography className={clsx(classes.subtitle, text.subtitle)} gutterBottom component="span">
                {"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this posts contents."}
              </Typography>
            </a>
          </CardContent>
        </CardActionArea>
      </Card>
    </ButtonBase>
  );
}

export default Headline;
