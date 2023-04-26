import React, { useState } from 'react';
import Box from '@mui/material/Box';
import YouTube from 'react-youtube';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import yt from '~/youtube';
import { useText } from '~/theme/common';
import MediaCard from '../Cards/MediaCard';
import useStyles from './about-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Video() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3008'
    }
  };

  return (
    <div className={classes.mainFeature}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Vestibulum consequat hendrerit lacus
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="sf15CtXuw9M"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Box mb={2}>
        <h4 className={text.title2}>
          Lorem ipsum dolor sit amet.
        </h4>
      </Box>
      <p className={text.subtitle2}>
        Proin scelerisque sapien at enim faucibus, ut scelerisque urna consequat. In porttitor congue libero
      </p>
      <MediaCard
        title="Sed lacinia velit, ut malesuada eros interdum a"
        orientation="landscape"
        type="video"
        thumb="https://source.unsplash.com/random"
        action={() => handleClickOpen()}
      />
    </div>
  );
}

export default Video;
