import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  /* General */
  profileCard: {
    display: 'flex',
    borderRadius: theme.rounded.medium
  },
  contentProfile: {},
  figure: {
    height: 200,
    position: 'relative',
    display: 'block'
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    margin: '0 auto'
  },
  subtitle: {
    fontSize: 18,
    color: theme.palette.text.secondary
  },
  desc: {
    marginTop: theme.spacing(2)
  },
  avatarBig: {
    width: 92,
    height: 92,
    background: theme.palette.secondary.dark,
  },
  avatarSmall: {
    width: 60,
    height: 60,
    background: theme.palette.secondary.dark,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'noWrap'
  },
  buttonProfile: {
    minWidth: 150,
    margin: 0
  },
  properties: {
    padding: theme.spacing(2)
  },
  action: {
    padding: 0,
    '& svg': {
      color: theme.palette.secondary.main
    }
  },
  bottomLink: {
    width: '100%',
    '& > button': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  /* Orientation */
  portrait: {
    maxWidth: 400,
    flexDirection: 'column',
    textAlign: 'center',
    '& $properties': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    '& $contentProfile': {
      marginTop: -70,
      flex: '1 0 auto',
    },
    '& $buttonProfile': {
      margin: 20
    }
  },
  landscape: {
    maxWidth: 820,
    flexDirection: 'row',
    alignItems: 'center',
    height: 160,
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      height: 120
    },
    '& $figure': {
      width: 100,
      height: '100%',
      marginRight: -50
    },
    '& $subtitle': {
      fontSize: 14
    },
    '& $properties': {
      textAlign: 'left',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'flex-start'
      }
    },
    '& $desc': {
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    },
    '& $contentProfile': {
      display: 'flex',
      alignItems: 'center'
    },
    '& $action': {
      display: 'block',
      flex: 1,
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      '& $bottomLink': {
        '& > button': {
          whiteSpace: 'nowrap',
          '& span': {
            '& svg': {
              marginRight: theme.spacing(1)
            }
          }
        },
      }
    },
    '& $buttonProfile': {
      margin: '0 !important',
      [theme.breakpoints.down('sm')]: {
        minWidth: 100,
        height: 28,
        fontSize: 12
      }
    }
  },
  /* Type */
  full: {
    overflow: 'hidden',
    position: 'relative',
  },
  round: {
    '& $figure': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      overflow: 'hidden',
      height: 105,
      borderRadius: theme.rounded.medium
    },
    '&$portrait': {
      '& $figure': {
        marginRight: theme.spacing(1)
      }
    },
    '&$landscape': {
      [theme.breakpoints.down('sm')]: {
        '& $figure': {
          height: 145
        }
      }
    }
  },
  oval: {
    overflow: 'hidden',
    '&$portrait': {
      '& $figure': {
        height: 150,
        width: '120%',
        marginLeft: '-10%',
        overflow: 'hidden',
        borderRadius: '0 0 50% 50%',
        '& > div': {
          overflow: 'visible',
          height: 'auto !important'
        }
      }
    },
    '&$landscape': {
      '& $figure': {
        overflow: 'hidden',
        borderRadius: '0 50% 50% 0 !important',
        height: '120% !important',
      },
      '& $action': {
        margin: theme.spacing(0, 3)
      }
    }
  },
  over: {
    overflow: 'visible',
    '&$portrait': {
      marginTop: theme.spacing(2),
      '& $figure': {
        overflow: 'hidden',
        boxShadow: theme.shade.light,
        margin: theme.spacing(-2, 2, 0),
        borderRadius: theme.rounded.medium
      }
    },
    '&$landscape': {
      marginLeft: theme.spacing(2),
      '& $figure': {
        overflow: 'hidden',
        boxShadow: theme.shade.light,
        height: 105,
        marginLeft: theme.spacing(-2),
        borderRadius: theme.rounded.medium,
      }
    }
  }
}));

export default useStyles;
