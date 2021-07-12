import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
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

export default testiStyles;
