import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import useStyles from './news-card-style';

function NewsCard(props) {
  const { classes, cx } = useStyles();
  const {
    headline,
    title,
    img,
    orientation,
    type,
  } = props;
  const { t } = useTranslation('common');

  return (
    <Card className={cx(classes.newsCard, classes[orientation], classes[type])}>
      <div className={classes.figure}>
        <CardMedia className={classes.media} image={img} title="thumb" />
      </div>
      <div className={classes.properties}>
        <CardContent className={classes.desc}>
          <div className={classes.text}>
            <Typography variant="caption" className={classes.title}>{headline}</Typography>
            <Typography display="block" noWrap variant="h6">{title}</Typography>
          </div>
        </CardContent>
        <CardActions>
          {type === 'portrait' && <Box p={1} flexGrow={1} />}
          <Button className={classes.btn}>
            {t('btn_read_more')}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

NewsCard.propTypes = {
  headline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  type: PropTypes.string,

};

NewsCard.defaultProps = {
  orientation: 'portrait',
  type: 'full', // available props: full, rounded, over, oval
};

export default NewsCard;
