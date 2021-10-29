import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
  },
  listPeople: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
  },
  comment: {
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 16
    }
  },
  commentList: {
    marginTop: theme.spacing(2),
    alignItems: 'flex-start'
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 18
  },
  profileList: {},
  commentText: {
    marginTop: theme.spacing(1),
    fontSize: 14,
  },
  avatarMini: {
    width: 30,
    height: 30,
  },
  avatarComment: {
    marginRight: theme.spacing(3)
  },
  commentAction: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    margin: 0,
  },
  input: {},
  commentForm: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      minWidth: 600,
    },
    width: '100%',
    padding: '15px 20px',
    margin: 0,
    '& $input': {
      flex: 1,
      marginLeft: theme.spacing(1)
    }
  },
  helpItem: {
    textTransform: 'uppercase',
    fontSize: 13
  },
  icon: {
    minWidth: 40,
    '& svg': {
      width: 28,
      height: 28
    }
  },
  sendButton: {
    position: 'absolute',
    top: 20,
    right: 24
  }
}));

export default styles;
