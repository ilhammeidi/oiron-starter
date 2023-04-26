import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import visitorAvatar from '~/public/images/avatars/pp_boy4.svg';
import { useFlexBox } from '~/theme/common';
import useStyles from './chat-style';

function Chat() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    {
      text: 'Hola!, Maecenas',
      visitor: false
    },
    {
      text: 'Hola!, Maecenas nisl ',
      visitor: true
    },
    {
      text: 'Hola!, Maecenas',
      visitor: false
    }
  ]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message !== '') {
      setConversation(conv => [...conv, { text: message, visitor: true }]);
      setMessage('');
      // scroll to bottom
      const ctn = document.getElementById('chat-container');
      setTimeout(() => {
        ctn.scrollTo(0, ctn.scrollHeight);
      }, 300);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const toggleChat = () => {
    setShow(!show);
  };

  const closeChat = () => {
    setShow(false);
  };

  const { classes, cx } = useStyles();
  const { classes: flex } = useFlexBox();

  return (
    <div className={classes.chat}>
      <div className={cx(classes.panel, show ? classes.show : '')}>
        <header>
          <h3>
            <span className={cx(classes.indicator, classes.online)} />
            Live Chat
          </h3>
          <IconButton onClick={() => closeChat()} className={classes.close} size="large">
            <i className="ion-android-close" />
          </IconButton>
        </header>
        <div className={classes.chatRoom} id="chat-container">
          <ul>
            {conversation.map((item, index) => (
              <li
                key={index.toString()}
                className={cx(classes.item, item.visitor ? flex.justifyEnd : '')}
              >
                {!item.visitor && (
                  <Avatar className={classes.avatar}>
                    <img
                      src={visitorAvatar}
                      alt="visitor"
                    />
                  </Avatar>
                )}
                <span className={cx(classes.talk, !item.visitor ? classes.from : '')}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.form}>
          <TextField
            variant="standard"
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(e) => handleChange(e)}
            value={message}
            label="Ask something"
            className={classes.input}
          />
          <Fab
            className={classes.send}
            size="small"
            onClick={() => handleSend()}
          >
            <i className="ion-android-send" />
          </Fab>
        </div>
      </div>
      <Fab
        className={classes.chatButton}
        onClick={() => toggleChat()}
      >
        <span className={cx(classes.indicator, classes.online)} />
        <i className="ion-chatbox" />
      </Fab>
    </div>
  );
}

export default Chat;
