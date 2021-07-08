import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none'
  },
  listPeople: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
  },
  commentList: {
    marginTop: theme.spacing(2)
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 18
  },
  profileList: {},
  commentText: {
    marginTop: 5
  },
  avatarMini: {
    width: 30,
    height: 30,
  },
  avatarComment: {
    marginRight: theme.spacing(3)
  },
  commentAction: {
    background: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100],
    margin: 0,
  },
  input: {},
  commentForm: {
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
      margin: '0 10px'
    }
  },
  commentHead: {
    display: 'flex'
  },
  helpItem: {
    textTransform: 'uppercase',
    fontSize: 13
  },
  sendButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  }
});

export default styles;
