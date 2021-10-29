import { makeStyles } from '@material-ui/core/styles';

const sliderStyle = makeStyles(theme => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
  },
  slide: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      height: 450
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(15, 0, 5)
    }
  },
  img: {
    right: '1%',
    maxWidth: '40%',
    '& img': {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: 100,
    },
    [theme.breakpoints.up('md')]: {
      right: theme.direction === 'ltr' ? '10%' : 'auto',
      left: theme.direction === 'ltr' ? 'auto' : '10%',
      maxWidth: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(4, 0)
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      color: theme.palette.text.secondary,
    }
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  btnNav: {
    textTransform: 'none',
    height: 'auto',
    padding: theme.spacing(1),
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
    },
    '&$active': {
      color: theme.palette.primary.main
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

export default sliderStyle;
