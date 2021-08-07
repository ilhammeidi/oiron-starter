import { makeStyles } from '@material-ui/core/styles';

const aboutStyle = makeStyles(theme => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.up('sm')]: {
      height: 600
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(12, 0, 5)
    }
  },
  slide: {
    position: 'relative',
  },
  img: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3)
    },
    img: {
      width: 310
    }
  },
  inner: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3)
    },
    '* h5': {
      color: theme.palette.text.secondary,
    }
  },
  videoPopup: {
    maxWidth: 'none',
    '& h4': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      flex: 1,
      overflow: 'hidden',
    },
    [theme.breakpoints.up('sm')]: {
      width: 690
    },
    '& iframe': {
      width: '100%'
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  },
  progressWrap: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0, 10)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h5': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: '10px !important'
  },
  bar: {
    borderRadius: 10,
    backgroundImage: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main});`,
  },
  textIcon: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& i': {
      color: theme.palette.secondary.main,
      fontSize: 28
    },
    '& h6': {
      marginLeft: theme.spacing(1)
    }
  },
  progress: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0, 10)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  bgWrapper: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    padding: theme.spacing(4, 0, 10)
  },
  galleryRoot: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '& ul[class*="slick-dots"]': {
      bottom: -55
    }
  },
  item: {
    direction: theme.direction === 'rtl' ? 'ltr' : 'inherit'
  },
  carousel: {
    position: 'relative',
  },
  teamRoot: {
    '& ul[class*="slick-dots"]': {
      bottom: -55
    },
    '& $item > *': {
      [theme.breakpoints.down('xs')]: {
        width: 280
      }
    },
    '& $carousel': {
      '& > *': {
        height: 160,
      }
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    fontSize: 38,
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  prev: {
    left: -30
  },
  next: {
    right: -30
  }
}));

export default aboutStyle;
