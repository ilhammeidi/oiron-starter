import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Favorite from '@material-ui/icons/Favorite';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import Divider from '@material-ui/core/Divider';
import avatarDefault from '~/public/images/avatars/pp_boy4.svg';
import useStyles from './profile-card-style';

function ProfileCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const {
    cover,
    name,
    title,
    avatar,
    connection,
    favorites,
    albums,
    type,
    orientation,
    href
  } = props;

  return (
    <Card className={clsx(classes.profileCard, classes[orientation], classes[type])}>
      <CardMedia
        className={classes.figure}
        image={cover}
        title="cover"
      />
      <CardContent className={classes.contentProfile}>
        <Avatar
          alt="avatar"
          src={avatar}
          className={clsx(classes.avatar, orientation === 'portrait' ? classes.avatarBig : classes.avatarSmall)}
        />
        <div className={classes.properties}>
          <div>
            <Typography variant="h5" className={classes.title}>
              <strong>
                {name}
              </strong>
            </Typography>
            <Typography className={classes.subtitle}>
              <span>{title}</span>
            </Typography>
            <div className={classes.desc}>
              <Typography variant="caption" component="p" className={classes.desc}>
                {connection}
                &nbsp;connection
              </Typography>
            </div>
            {orientation === 'portrait' || isMobile ? (
              <Button
                className={classes.buttonProfile}
                variant="outlined"
                color="primary"
                href={href}
              >
                See Profile
              </Button>
            ) : ''}
          </div>
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.action}>
        <BottomNavigation
          showLabels
          className={classes.bottomLink}
        >
          <BottomNavigationAction label={connection + ' Connection'} icon={<SupervisorAccount />} />
          <BottomNavigationAction label={favorites + ' Favorites'} icon={<Favorite />} />
          <BottomNavigationAction label={albums + ' Albums'} icon={<PhotoLibrary />} />
        </BottomNavigation>
        {orientation === 'landscape' && (
          <Button
            fullWidth
            className={classes.buttonProfile}
            variant="outlined"
            color="primary"
            href={href}
          >
            See Profile
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

ProfileCard.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  connection: PropTypes.number,
  favorites: PropTypes.number,
  albums: PropTypes.number,
  type: PropTypes.string,
  orientation: PropTypes.string,
  href: PropTypes.string
};

ProfileCard.defaultProps = {
  avatar: avatarDefault,
  connection: 0,
  favorites: 0,
  albums: 0,
  type: 'full', // available props: full, rounded, over, oval
  orientation: 'portrait',
  href: '#'
};

export default ProfileCard;
