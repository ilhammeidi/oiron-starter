import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../list-style';

function ImageWidget() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const imgData = [{
    src: 'https://source.unsplash.com/random'
  },
  {
    src: 'https://source.unsplash.com/random'
  },
  {
    src: 'https://source.unsplash.com/random'
  },
  {
    src: 'https://source.unsplash.com/random'
  }];

  return (
    <Paper title={t('blog_album')} icon="ion-images" whiteBg desc="">
      <div className={classes.albumRoot}>
        <ImageList rowHeight={180} className={classes.gridList}>
          {
            imgData.map((tile, index) => {
              if (index >= 4) {
                return false;
              }
              return (
                <ImageListItem key={index.toString()}>
                  <img src={tile.src} className={classes.img} alt="thumb" />
                  <ImageListItemBar
                    title={tile.title}
                    subtitle={(
                      <span>
                        by:&nbsp;
                        John Doe
                      </span>
                    )}
                    actionIcon={(
                      <IconButton className={classes.icon} size="large">
                        <InfoIcon />
                      </IconButton>
                    )}
                  />
                </ImageListItem>
              );
            })
          }
        </ImageList>
        <Divider className={classes.divider} />
        <Grid container justifyContent="center">
          <Button fullWidth color="secondary">
            {t('btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default ImageWidget;
