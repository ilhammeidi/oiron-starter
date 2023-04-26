import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Send from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import avatarDefault from '~/public/images/avatars/pp_boy4.svg';
import useStyles from './comment-style';

function Form(props) {
  const { classes } = useStyles();

  const [comment, setComment] = useState('');

   // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  // Translation Function
  const { avatar } = props;
  const { t } = useTranslation('common');

  const handleChange = event => {
    setComment(event.target.value);
  };

  return (
    <section className={classes.commentAction}>
      <div className={classes.commentForm}>
        <Avatar alt="avatar" src={avatar !== '' ? avatar : avatarDefault} className={classes.avatarMini} />
        <TextField
          placeholder="Write Comment"
          size="small"
          variant="outlined"
          onChange={handleChange}
          value={comment}
          className={classes.input}
          inputProps={{
            'aria-label': 'Comment',
          }}
        />
        <Button variant="contained" size="small" color="primary" aria-label="send" className={classes.sendButton}>
          {isMobile ? (<Send />) : t('form_send')}
        </Button>
      </div>
    </section>
  );
}

Form.propTypes = {
  avatar: PropTypes.string
};

Form.defaultProps = {
  avatar: ''
};

export default Form;
