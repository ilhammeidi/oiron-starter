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
  },
  btnTag: {
    position: 'relative',
    cursor: 'pointer',
    '& label': {
      display: 'inline-block',
      padding: '1px 6px',
      margin: 4,
      borderRadius: theme.rounded.small,
      border: `1px solid ${theme.palette.primary.main}`,
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.3s ease',
      background: theme.palette.background.default,
    },
    '& input': {
      opacity: 0,
      position: 'absolute',
      '&:checked + label': {
        color: theme.palette.common.white,
        background: theme.palette.primary.main
      }
    }
  }
}));

export default filterStyles;
