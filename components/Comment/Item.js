import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import avatarDefault from '~/public/images/avatars/pp_boy4.svg';
import useStyles from './comment-style';

function Item(props) {
  const {
    avatar,
    name,
    date,
    comment,
    last
  } = props;

  const { classes } = useStyles();

  return (
    <Fragment>
      <ListItem component="div" className={classes.commentList}>
        <Avatar alt="avatar" src={avatar !== '' ? avatar : avatarDefault} className={classes.avatarComment} />
        <div className={classes.comment}>
          <section>
            <h6>{name}</h6>
            <Typography variant="caption">{date}</Typography>
          </section>
          <Typography className={classes.commentText}>{comment}</Typography>
        </div>
      </ListItem>
      {!last && <Divider className={classes.divider} />}
    </Fragment>
  );
}

Item.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  last: PropTypes.bool
};

Item.defaultProps = {
  avatar: '',
  last: false
};

export default Item;
