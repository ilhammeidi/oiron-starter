import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withTranslation } from '~/i18n';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function GalleryWidget(props) {
  const classes = useStyles();
  const { t } = props;

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
    <Paper title={t('common:blog_album')} icon="ion-ios-images-outline" whiteBg desc="">
      <div className={classes.albumRoot}>
        <GridList cellHeight={180} className={classes.gridList}>
          {
            imgData.map((tile, index) => {
              if (index >= 4) {
                return false;
              }
              return (
                <GridListTile key={index.toString()}>
                  <img src={tile.img} className={classes.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={(
                      <span>
                        by:&nbsp;
                        {tile.author}
                      </span>
                    )}
                    actionIcon={(
                      <IconButton className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    )}
                  />
                </GridListTile>
              );
            })
          }
        </GridList>
      </div>
      <Divider className={classes.divider} />
      <Grid container justify="center">
        <Button color="secondary">
          See All
        </Button>
      </Grid>
    </Paper>
  );
}

GalleryWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

GalleryWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(GalleryWidget);
