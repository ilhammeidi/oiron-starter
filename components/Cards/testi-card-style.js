import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi_card' })(theme => ({
  card: {
    padding: theme.spacing(3)
  },
  name: {
    display: 'flex',
    marginTop: theme.spacing(),
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      marginLeft: theme.spacing()
    }
  },
  avatar: {
    width: 30,
    height: 30
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
