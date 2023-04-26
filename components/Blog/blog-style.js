import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import {
  deepOrange, deepPurple, blue,
  red, pink, indigo,
  cyan, green,
} from '@mui/material/colors';

const useStyles = makeStyles({ uniqId: 'blog' })(theme => ({
  blogWrap: {
    marginTop: theme.spacing(5)
  },
  media: {
    height: 460,
    position: 'absolute',
    width: '100%',
    '&:after': {
      content: '""',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute'
    }
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
  orange: {
    backgroundColor: deepOrange[500],
  },
  purple: {
    backgroundColor: deepPurple[500],
  },
  pink: {
    backgroundColor: pink[300],
  },
  green: {
    backgroundColor: cyan[500],
  },
  cyan: {
    backgroundColor: green[500],
  },
  indigo: {
    backgroundColor: indigo[500],
  },
  invertBtn: {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
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
    alignItems: 'flex-end',
    '& > div': {
      flex: 1
    },
    '& button': {
      top: theme.spacing(-1),
      marginLeft: theme.spacing(1)
    }
  },
  whiteInputRoot: {
    '& label, input': {
      color: `${theme.palette.common.white} !important`,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: alpha(theme.palette.common.white, 0.6),
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.common.white
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: theme.palette.common.white,
    }
  },
  subtitle: {},
  blogHeadline: {
    cursor: 'pointer',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 460,
      alignItems: 'flex-end',
      display: 'flex'
    },
  },
  anchorContent: {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10)
    }
  },
  headlineTitle: {
    display: 'block',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(4)
  },
  titleBlog: {
    fontWeight: theme.typography.fontWeightMedium
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
    margin: `${theme.spacing(2)} 0`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)} 0`,
    },
    background: 'none'
  },
  dividerBordered: {
    margin: `${theme.spacing(3)} 0`
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2)
    }
  },
  postList: {
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(3)
    }
  },
  article: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: '24px',
    '& ul, ol': {
      marginLeft: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      paddingLeft: 0
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
    color: blue[300],
    borderColor: blue[300],
    '&:hover': {
      borderColor: blue[500],
    },
  },
  indigoBtn: {
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
      borderWidth: 2,
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        borderRadius: '50%',
        width: 35,
        height: 35,
        padding: 0,
        minWidth: 0
      },
      '& i': {
        fontSize: 18,
        [theme.breakpoints.up('sm')]: {
          marginRight: theme.spacing(1),
        }
      }
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  },
  flipRtl: {
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
