import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import useStyles from './post-card-style';

function PostCard(props) {
  const { classes, cx } = useStyles();
  const {
    date,
    title,
    desc,
    img,
    orientation,
    type,
    href,
  } = props;
  const { t } = useTranslation('common');

  return (
    <Card className={cx(classes.newsCard, classes[orientation], classes[type])}>
      <div className={classes.figure}>
        <CardMedia className={classes.media} image={img} title="thumb" />
      </div>
      <div className={classes.properties}>
        <CardContent>
          <div className={classes.text}>
            <Typography display="block" noWrap variant="h6" className={classes.title}>
              <Box component="span" display="block" textOverflow="ellipsis" overflow="hidden">
                {title}
              </Box>
            </Typography>
            <Typography variant="caption" className={classes.caption}>{date}</Typography>
            <Typography display="block" className={classes.desc}>
              <span>
                {desc}
              </span>
            </Typography>
          </div>
        </CardContent>
        <CardActions className={classes.action}>
          <Button variant="outlined" href={href} className={classes.btn}>
            {t('btn_read_more')}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

PostCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  orientation: PropTypes.string,

  type: PropTypes.string,
  href: PropTypes.string,
};

PostCard.defaultProps = {
  orientation: 'portrait',
  href: '#!',
  type: 'full', // available props: full, rounded, over, oval
};

export default PostCard;
