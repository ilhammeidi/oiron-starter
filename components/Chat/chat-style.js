import { makeStyles } from 'tss-react/mui';

const chatStyles = makeStyles({ uniqId: 'chat' })((theme, _params, classes) => ({
  indicator: {
    marginRight: 4,
    borderRadius: '50%',
    width: 12,
    height: 12,
    display: 'inline-block'
  },
  chatButton: {
    position: 'fixed',
    bottom: 40,
    right: 40,
    textAlign: 'right',
    fontSize: 32,
    boxShadow: theme.palette.mode === 'dark' ? theme.shade.dark : theme.shade.light,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '& i': {
      position: 'relative',
      top: 3,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    [`& .${classes.indicator}`]: {
      position: 'absolute',
      top: 4,
      left: 2
    }
  },
  show: {},
  panel: {
    position: 'fixed',
    bottom: 40,
    right: 40,
    visibility: 'hidden',
    zIndex: -1,
    opacity: 0,
    textAlign: 'left',
    transform: 'scale(0.9)',
    transition: 'all 0.2s cubic-bezier(0.01, 0.65, 0.3, 0.9)',
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
    '& header': {
      display: 'flex',
      padding: theme.spacing(2, 2, 0.5),
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      '& h3': {
        flex: 1,
        margin: 0
      }
    },
    [`&.${classes.show}`]: {
      transform: 'scale(1)',
      visibility: 'visible',
      zIndex: 100,
      opacity: 1
    }
  },
  close: {
    fontSize: 24,
    position: 'relative',
    top: -4,
    padding: theme.spacing(0, 1),
    '& i': {
      position: 'relative',
      top: 0,
    }
  },
  online: {
    background: '#07D517'
  },
  offline: {
    background: '#b7b7b7'
  },
  chatRoom: {
    padding: theme.spacing(2),
    position: 'relative',
    height: 300,
    width: 300,
    overflow: 'auto',
    '& ul': {
      padding: 0,
      '& li': {
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
        marginBottom: theme.spacing(4)
      }
    }
  },
  avatar: {
    marginRight: theme.spacing(1.5),
    '& img': {
      width: 38,
      height: 38,
    }
  },
  talk: {
    fontSize: 16,
    lineHeight: '26px',
    position: 'relative',
    borderRadius: theme.rounded.small,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(0.5, 1.5)
  },
  from: {
    border: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '&:before': {
      position: 'absolute',
      top: 5,
      content: '""',
      left: -5,
      borderTop: '5px solid transparent',
      borderBottom: '10px solid transparent',
      borderRight: '5px solid',
      borderRightColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    }
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2)
  },
  input: {
    flex: 1
  },
  send: {
    boxShadow: 'none',
    marginLeft: theme.spacing(2),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none',
    fontSize: 22,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '& i': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default chatStyles;
