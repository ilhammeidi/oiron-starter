import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    padding: theme.spacing(8, 0)
  },
  text: {},
  counterItem: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      marginRight: theme.spacing(2),
      width: 40,
      height: 40,
      [theme.breakpoints.up('md')]: {
        width: 80,
        height: 80,
      },
    },
    '& $text': {
      '& h4': {
        fontWeight: 'bold',
      }
    }
  },
  dark: {
    background: theme.palette.primary.main,
    '& $counterItem': {
      color: theme.palette.common.white,
      '& svg': {
        fill: theme.palette.common.white,
      }
    }
  }
}));

export default counterStyles;
