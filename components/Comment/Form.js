import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Send from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import avatarDefault from '~/public/images/avatars/pp_boy4.svg';
import useStyles from '../blog-style';

function Comment(props) {
  const classes = useStyles();

  const [comment, setComment] = useState('');

   // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  // Translation Function
  const { t, avatar } = props;

  const handleChange = event => {
    setComment(event.target.value);
  };

  return (
    <section className={classes.commentAction}>
      <div className={classes.commentForm}>
        <Avatar alt="avatar" src={avatar} className={classes.avatarMini} />
        <Input
          placeholder="Write Comment"
          onChange={handleChange}
          value={comment}
          className={classes.input}
          inputProps={{
            'aria-label': 'Comment',
          }}
        />
        <Button size="small" color="primary" aria-label="send" className={classes.sendButton}>
          {isMobile ? (<Send />) : t('common:form_send')}
        </Button>
      </div>
    </section>
  );
}

Comment.propTypes = {
  t: PropTypes.func.isRequired,
  avatar: PropTypes.String
};

Comment.defaultProps = {
  avatar: avatarDefault
};

export default withTranslation(['common'])(Comment);
