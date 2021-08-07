import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  profileList: {
    padding: 0,
    margin: '0 -24px -24px',
    '& li': {
      paddingLeft: 0
    }
  },
  avatar: {
    margin: 10,
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: '0 -24px -24px',
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      width: '100%'
    }
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  img: {
    maxWidth: 'none'
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)}px 0`,
    },
    background: 'none'
  },
  desc: {
    maxHeight: 130,
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(5),
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  text: {
    textAlign: 'left',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
      width: '100%',
      '& span': {
        display: 'block',
        fontWeight: theme.typography.fontWeightMedium,
      }
    }
  },
  star: {},
  property: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(2),
    '& $star': {
      color: '#ff9500',
      marginRight: theme.spacing(2),
      '& i': {
        color: '#ff9500'
      }
    },
    '7 $divider': {
      background: 'none',
      borderLeft: '1px solid',
      borderColor: theme.palette.text.primary,
      height: 12,
      margin: `6px ${theme.spacing(2)}`,
      display: 'inlineBlock',
    }
  },
  textBtn: {},
  btnArea: {
    zIndex: 10,
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      '& > *': {
        margin: theme.spacing(0, 0, 2),
      }
    },
    '& $textBtn': {
      paddingLeft: 8,
      paddingRight: 8,
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
      '& i': {
        fontSize: '1.3rem',
        marginRight: 4
      }
    },
    '& > *': {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    }
  },
  linkArea: {
    zIndex: 10,
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    '& $textBtn': {
      paddingLeft: 8,
      paddingRight: 8,
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
      '& i': {
        fontSize: '1.3rem',
        marginRight: 4
      }
    },
    '& > *': {
      marginRight: theme.spacing(1)
    }
  },
  zoomIcon: {
    position: 'absolute',
    fontSize: 56,
    top: 'calc(50% - 28px)',
    left: 'calc(50% - 28px)',
    opacity: 0,
    color: theme.palette.common.white,
    textShadow: `1px 1px 10px ${theme.palette.common.black}`,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
  },
  figure: {},
  thumb: {
    width: 60,
    height: 60,
    marginRight: theme.spacing()
  },
  image: {
    textAlign: 'center',
    lineHeight: 360,
    marginBottom: theme.spacing(2),
    backgroundSize: 'cover',
    verticalAlign: 'middle',
    position: 'relative',
    margin: '0 auto',
    borderRadius: theme.rounded.small,
    width: '100%',
    height: 100,
    '& $figure': {
      boxShadow: theme.shadow3,
      overflow: 'hidden',
      borderRadius: theme.rounded.big,
      margin: theme.spacing(2),
      marginTop: 0,
      cursor: 'pointer',
    }
  },
  person: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5)
    },
    '& h6': {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      marginBottom: theme.spacing(4)
    }
  },
  about: {
    padding: theme.spacing(5, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    },
    '& h4': {
      margin: 0,
    },
    '& $btnArea': {
      marginTop: theme.spacing(6),
    },
  },
  helpPaper: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    padding: theme.spacing(2, 1),
  },
  headline: {
    color: theme.palette.primary.dark,
  },
  carousel: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0)
    }
  },
  item: {
    padding: theme.spacing(1),
    '& $figure': {
      overflow: 'hidden',
      cursor: 'pointer',
    },
    '& a': {
      display: 'block'
    },
    '&:hover': {
      '& $zoomIcon': {
        opacity: 1
      }
    }
  },
  imgDetail: {
    height: 300,
    width: '100%',
    borderRadius: theme.rounded.big,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  galleryItem: {
    padding: 2
  },
  productItem: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '& a': {
      display: 'block',
      textDecoration: 'none',
    }
  },
  price: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main
  },
  scrollTablet: {
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto',
      paddingBottom: theme.spacing(2),
      flexWrap: 'nowrap'
    }
  }
}));

export default useStyles;
