import { makeStyles } from '@material-ui/core/styles';

const filterStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  filterBlock: {
    marginBottom: theme.spacing(3)
  },
  formControl: {
    display: 'block'
  },
  checklist: {
    paddingRight: 0,
    '& label': {
      display: 'block',
      width: '100%',
      marginRight: 0
    }
  }
}));

export default filterStyles;
