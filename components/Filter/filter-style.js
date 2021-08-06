import { makeStyles } from '@material-ui/core/styles';

const filterStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  sorter: {
    padding: theme.spacing(3, 0)
  },
  searchBanner: {
    height: 520,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  btnFilter: {
    marginRight: theme.spacing(1)
  },
  searchIcon: {},
  search: {
    position: 'relative',
    display: 'flex',
    margin: `${theme.spacing(4)}px auto`,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: 600
    },
    fontSize: 18,
    width: '100%',
    '& form': {
      width: '100%'
    },
    '& input': {
      borderRadius: 10,
      paddingLeft: theme.spacing(2)
    },
    '& label': {
      left: theme.spacing(3),
      top: theme.spacing(),
      fontWeight: theme.typography.fontWeightBold
    },
    '& label + div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    },
    '& $searchIcon': {
      position: 'absolute',
      top: 7,
      left: theme.spacing(1)
    }
  },
  filterBlock: {
    marginBottom: theme.spacing(3),
  },
  titleLabel: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    fontSize: '1rem'
  },
  formControl: {
    display: 'block',
    textAlign: 'left',
  },
  select: {
    display: 'block',
    textAlign: 'left',
    marginLeft: theme.spacing(2),
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 160
    }
  },
  switchView: {
    '& button': {
      padding: '5px 7px'
    }
  },
  checklist: {
    paddingRight: 0,
    paddingLeft: 0,
    '& label': {
      display: 'block',
      width: '100%',
      marginRight: 0
    }
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
      margin: '4px 2px',
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
