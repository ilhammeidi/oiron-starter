import { makeStyles } from '@material-ui/core/styles';

const basicStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(15),
    textAlign: 'center',
    '& nav': {
      margin: theme.spacing(6, 0),
      '& ul': {
        margin: 0,
        padding: 0,
        '& li': {
          display: 'inline-block',
          margin: theme.spacing(0, 1),
          '& a': {
            color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
            textTransform: 'capitalize',
            textDecoration: 'none !important',
            padding: theme.spacing(0, 1),
            fontSize: 18,
            [theme.breakpoints.down('xs')]: {
              fontSize: 16
            }
          }
        }
      }
    }
  },
  logo: {
    marginBottom: theme.spacing(3),
    '& img': {
      width: 70,
    }
  },
  subscribe: {
    maxWidth: 560,
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    position: 'relative',
    '& h5': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  form: {
    display: 'block',
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  field: {
    width: '100%',
    '& input': {
      paddingRight: theme.spacing(20),
      [theme.breakpoints.down('xs')]: {
        paddingRight: 90
      }
    }
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 90
  },
  socmed: {
    display: 'flex',
    width: 200,
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  icon: {
    borderRadius: 0,
    padding: theme.spacing(),
    background: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '&:hover': {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light
    },
    '& i': {
      width: 25,
      height: 25,
      fontSize: 22,
    }
  },
  copyright: {
    display: 'block',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    background: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  }
}));

export default basicStyles;
