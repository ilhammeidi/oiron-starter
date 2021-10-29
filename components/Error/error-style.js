import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  errorWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    padding: theme.spacing(20, 0, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(15, 0)
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  illustration: {
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2, 5)
    },
    '& img': {
      position: 'relative',
      maxWidth: 350,
      [theme.breakpoints.up('md')]: {
        right: theme.spacing(2)
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '80%'
      }
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
    '& p': {
      fontSize: 22,
      color: theme.palette.text.secondary
    }
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

export default useStyles;
