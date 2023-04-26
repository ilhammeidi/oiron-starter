import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'logo' })(theme => ({
  logo: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex',
  },
  landscape: {
    alignItems: 'center',
    position: 'relative',
    top: -2,
    '& img': {
      marginRight: theme.spacing(1)
    }
  },
  portrait: {
    display: 'block',
    margin: '0 auto 8px',
    '& img': {
      margin: `0 auto ${theme.spacing(1)}`,
      display: 'block'
    }
  },
  small: {
    fontSize: 16,
    '& img': {
      maxWidth: 34,
      height: 34
    }
  },
  medium: {
    fontSize: 18,
    '& img': {
      maxWidth: 54,
      height: 54
    }
  },
  large: {
    fontSize: 28,
    '& img': {
      maxWidth: 64,
      height: 64
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
