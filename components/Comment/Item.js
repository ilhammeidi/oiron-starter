import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
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

  const classes = useStyles();

  return (
    <div className={classes.commentList}>
      <ListItem>
        <div className={classes.commentHead}>
          <Avatar alt="avatar" src={avatar} className={classes.avatarComment} />
          <section>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="caption">{date}</Typography>
          </section>
        </div>
        <Typography className={classes.commentText}>{comment}</Typography>
      </ListItem>
      {last && <Divider />}
    </div>
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
  avatar: avatarDefault,
  last: false
};

export default Item;
