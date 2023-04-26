import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Favorite from '@mui/icons-material/Favorite';
import PhotoLibrary from '@mui/icons-material/PhotoLibrary';
import Divider from '@mui/material/Divider';
import avatarDefault from '~/public/images/avatars/pp_boy4.svg';
import useStyles from './profile-card-style';

function ProfileCard(props) {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
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
    <Card className={cx(classes.profileCard, classes[orientation], classes[type])}>
      <CardMedia
        className={classes.figure}
        image={cover}
        title="cover"
      />
      <CardContent className={classes.contentProfile}>
        <Avatar
          alt="avatar"
          src={avatar}
          className={cx(classes.avatar, orientation === 'portrait' ? classes.avatarBig : classes.avatarSmall)}
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
