import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
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

export default testiStyles;
