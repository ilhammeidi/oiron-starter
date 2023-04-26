import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
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
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& svg': {
      width: 80,
      height: 80,
      fill: theme.palette.text.primary,
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2),
      }
    },
    [`& .${classes.text}`]: {
      '& h4': {
        fontWeight: 'bold',
      }
    }
  },
  dark: {
    background: theme.palette.primary.main,
    [`& .${classes.counterItem}`]: {
      color: theme.palette.common.white,
      '& svg': {
        fill: theme.palette.common.white,
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
