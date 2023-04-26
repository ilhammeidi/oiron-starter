import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import useStyles from './media-card-style';

function MediaCard(props) {
  const { classes, cx } = useStyles();
  const {
    thumb,
    title,
    orientation,
    duration,
    type,
    action,
    href
  } = props;

  return (
    <Card className={cx(classes.mediaCard, classes[orientation], classes[type])}>
      <CardContent>
        { type === 'video' && <Chip className={classes.duration} size="small" label={duration} /> }
        { type === 'photo' && <ButtonBase focusRipple href={href} className={classes.coverLink}>&nbsp;</ButtonBase> }
        <figure>
          <img src={thumb} alt="cover" />
        </figure>
        <div className={classes.property}>
          { type === 'video' && (
            <IconButton className={classes.playBtn} onClick={action} size="large">
              <span className="ion-ios-play" />
            </IconButton>
          )}
          <Typography className={classes.mediaTitle} variant="h5">
            {title}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  orientation: PropTypes.string,
  duration: PropTypes.string,
  href: PropTypes.string,
  action: PropTypes.func,
};

MediaCard.defaultProps = {
  duration: '00:01',
  type: 'video',
  orientation: 'portrait',
  href: '#',
  action: () => {}
};

export default MediaCard;
