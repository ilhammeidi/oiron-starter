import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'company_logo' })(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
