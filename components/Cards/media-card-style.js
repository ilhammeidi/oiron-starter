import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  mediaCard: {
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(2, 0),
    height: 340,
    '& figure': {
      margin: 0,
      background: theme.palette.common.black,
      '& img': {
        opacity: 0.62,
        minHeight: '100%',
        width: '100%',
      }
    },
    '& > div': {
      padding: 0
    }
  },
  playBtn: {
    position: 'absolute',
    width: 150,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& span': {
      '&:before': {
        fontSize: 130,
        background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    }
  },
  duration: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1
  },
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '100%',
    minHeight: 170,
    padding: theme.spacing(3),
    top: 0,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: 0,
    color: theme.palette.common.white,
    background: 'linear-gradient(to bottom, rgba(238, 238, 238, 0) 20%, #000 90%)'
  },
  mediaTitle: {
    color: theme.palette.common.white,
    lineHeight: '28px'
  },
  coverLink: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'pointer',
    zIndex: 1
  },
  /* Orientation */
  landscape: {
    '& $mediaTitle': {
      textAlign: 'left'
    }
  },
  portrait: {
    maxWidth: 400,
    '& $mediaTitle': {
      textAlign: 'center',
      justifyContent: 'center'
    }
  },
  /* Type */
  photo: {
    cursor: 'pointer'
  }
}));

export default featureStyles;
