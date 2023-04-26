import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi' })(theme => ({
  testimonialWrap: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  carousel: {
    marginTop: theme.spacing(3)
  },
  item: {
    padding: theme.spacing(2)
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
