import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from './media-card-style';

function MediaCard(props) {
  const classes = useStyles();
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
    <Card className={clsx(classes.mediaCard, classes[orientation], classes[type])}>
      <CardContent>
        { type === 'video' && <Chip className={classes.duration} size="small" label={duration} /> }
        { type === 'photo' && <ButtonBase focusRipple href={href} className={classes.coverLink}>&nbsp;</ButtonBase> }
        <figure>
          <img src={thumb} alt="cover" />
        </figure>
        <div className={classes.property}>
          { type === 'video' && (
            <IconButton className={classes.playBtn} onClick={action}>
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
