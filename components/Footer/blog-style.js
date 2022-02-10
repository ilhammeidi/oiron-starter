import { makeStyles, alpha } from '@material-ui/core/styles';

const blogStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    marginTop: theme.spacing(10),
    position: 'relative',
    paddingBottom: theme.spacing(5),
    '& p': {
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      }
    },
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'inline-block',
      width: '30%',
      marginRight: '3%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      [theme.breakpoints.down('xs')]: {
        width: '47%'
      },
      '& a': {
        fontSize: 14,
        textTransform: 'capitalize',
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.dark
        }
      }
    },
  },
  title: {
    color: theme.palette.primary.dark,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(),
    fontWeight: theme.typography.fontWeightBold,
  },
  quickLinks: {
    marginTop: theme.spacing(6)
  },
  logo: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      '& + p': {
        textAlign: 'center'
      },
    },
    '& img': {
      width: 54,
      marginRight: theme.spacing(),
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 18,
      textTransform: 'capitalize  ',
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      width: 36,
      height: 36,
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    maxWidth: 250,
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    margin: `${theme.spacing(2)}px auto ${theme.spacing(4)}px`,
    '& $icon': {
      top: 29,
      color: theme.palette.primary.dark,
      position: 'relative',
    },
    '& svg': {
      color: theme.palette.primary.dark,
    },
    '& fieldset': {
      borderRadius: 10,
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)} !important`,
      '& legend': {
        top: 5,
        position: 'relative',
        borderTop: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`
      },
      '& + div + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 1.5, 1.5, 4),
        width: 'calc(100% - 32px)',
      }
    }
  },
  selectMenu: {
    width: 160,
    paddingLeft: theme.spacing(4),
    background: 'none !important'
  },
  footerCounter: {
    position: 'relative',
    background: theme.palette.primary.dark,
    '&:before': {
      content: '""',
      background: theme.palette.primary.dark,
      position: 'absolute',
      left: '-10%',
      borderRadius: '50%',
      top: -80,
      width: '120%',
      height: 350,
      [theme.breakpoints.down('xs')]: {
        height: 120,
      }
    },
  },
  category: {},
  listText: {},
  blogItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    textAlign: 'left',
    justifyContent: 'flex-start',
    '& $category': {
      marginBottom: theme.spacing(),
      display: 'block',
      color: theme.palette.secondary.dark
    },
    '& $listText': {
      flex: 1,
    },
    '& figure': {
      borderRadius: 4,
      overflow: 'hidden',
      margin: theme.spacing(0, 2, 0, 0),
      width: 80,
      height: 56,
      '& img': {
        display: 'block',
        minHeight: '100%',
        width: '100%',
      }
    },
    '& p': {
      fontSize: 13,
      textAlign: 'left'
    }
  },
}));

export default blogStyles;
