import { makeStyles } from 'tss-react/mui';

const sliderStyle = makeStyles({ uniqId: 'slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
  },
  slide: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      height: 450
    },
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(4, 0)
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
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
    [`&.${classes.active}`]: {
      color: theme.palette.primary.main
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
