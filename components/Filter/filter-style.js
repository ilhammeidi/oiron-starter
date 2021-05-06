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
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

export default filterStyles;
