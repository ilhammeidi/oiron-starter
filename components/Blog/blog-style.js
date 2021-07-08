import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  blogWrap: {
    marginTop: theme.spacing(5)
  },
  cardGrid: {
    position: 'relative'
  },
  profileList: {
    padding: 0,
    '& li': {
      paddingLeft: 0
    }
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    backgroundColor: deepPurple[500],
  },
  pinkAvatar: {
    backgroundColor: pink[500],
  },
  greenAvatar: {
    backgroundColor: green[500],
  },
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none',
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      width: '100%'
    }
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none'
  },
  listText: {
    whiteSpace: 'normal'
  },
  subscribeForm: {
    marginTop: theme.spacing(1) * -6,
    display: 'flex',
    '& > div': {
      flex: 1
    },
    '& button': {
      marginTop: theme.spacing(4.5),
      marginLeft: theme.spacing(1)
    }
  },
  whiteInputRoot: {
    '& label, input': {
      color: `${theme.palette.common.white} !important`,
    },
    '& > div': {
      borderColor: fade(theme.palette.common.white, 0.6),
    }
  },
  blogHeadline: {
    cursor: 'pointer',
    '& > *': {
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(3),
        height: 'auto !important'
      }
    },
    subtitle: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  anchorContent: {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10)
    }
  },
  headlineTitle: {
    fontWeight: theme.typography.fontWeightmedium,
    marginBottom: theme.spacing(4)
  },
  titleBlog: {
    fontWeight: theme.typography.fontWeightmedium
  },
  imageBlog: {
    margin: theme.spacing(5, 0),
    '& img': {
      width: '100%'
    }
  },
  list: {
    listStyle: 'disc'
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)}px 0`,
    },
    background: 'none'
  },
  dividerBordered: {
    margin: `${theme.spacing(3)}px 0`
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 22,
    padding: '16px 20px',
    position: 'relative',
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 60,
      height: 4,
      background: theme.palette.primary.main,
      bottom: 0,
      left: 20
    },
  },
  title2: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 22,
    padding: '16px 20px',
    position: 'relative',
    fontWeight: 600,
    marginTop: theme.spacing(3)
  },
  content: {
    padding: `0 ${theme.spacing(4)}`
  },
  postList: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  article: {
    color: theme.palette.text.primary,
    '& ul, ol': {
      marginLeft: theme.spacing(5),
      paddingBottom: theme.spacing(2),
    },
    '& ul': {
      listStyleType: 'disc'
    },
    '& ol': {
      listStyleType: 'decimal'
    },
    '& code': {
      whiteSpace: 'normal',
    }
  },
  redBtn: {
    color: red[500],
    borderColor: red[500],
    '&:hover': {
      borderColor: red[700],
    },
  },
  blueBtn: {
    color: indigo[300],
    borderColor: indigo[300],
    '&:hover': {
      borderColor: indigo[500],
    },
  },
  cyanBtn: {
    color: cyan[500],
    borderColor: cyan[500],
    '&:hover': {
      borderColor: cyan[700],
    },
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  btnArea: {
    '& button': {
      margin: theme.spacing(1)
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  }
}));

export default useStyles;
