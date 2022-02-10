import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 1),
    boxShadow: theme.shade.light,
    color: theme.palette.text.primary,
    overflow: 'hidden',
    '&$noMargin': {
      margin: 0
    },
  },
  descBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    }
  },
  titleText: {
    flex: 1
  },
  title: {
    position: 'relative',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontWeight: 600,
      marginBottom: theme.spacing(1)
    }
  },
  description: {
    maxWidth: 960,
    paddingTop: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  content: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2)
    }
  },
  whiteBg: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
  },
  noMargin: {},
  overflowX: {
    width: '100%',
    overflowX: 'auto',
  },
  iconTitle: {
    width: 36,
    height: 36,
    textAlign: 'center',
    lineHeight: '44px',
    verticalAlign: 'middle',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 40,
      verticalAlign: 'baseline',
      color: theme.palette.primary.main
    }
  },
  colorMode: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    '& $title': {
      color: theme.palette.grey[100],
      '&:after': {
        borderBottom: `5px solid ${theme.palette.primary.light}`
      }
    },
    '& $description': {
      color: theme.palette.grey[100],
    },
    '& $iconTitle': {
      '& i': {
        color: theme.palette.common.white
      }
    }
  },
}));

export default useStyles;
