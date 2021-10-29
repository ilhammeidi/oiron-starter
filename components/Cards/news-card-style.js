import { makeStyles } from '@material-ui/core/styles';

const cardsStyles = makeStyles(theme => ({
  figure: {},
  newsCard: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(8)
    },
    '& $figure': {
      margin: 0,
      overflow: 'hidden',
      borderRadius: 15,
      zIndex: 1,
      '& img': {
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    },
    '& p': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  media: {
    height: '100%'
  },
  desc: {
    flex: 1,
  },
  text: {
    padding: theme.spacing(0, 1),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
  },
  properties: {},
  btn: {
    marginTop: theme.spacing(1),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  },
  /* Orientation */
  landscape: {
    marginBottom: theme.spacing(5),
    '& $figure': {
      minWidth: 150,
      maxWidth: 200
    },
    '& $desc': {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
        marginLeft: theme.spacing(-12),
        paddingLeft: theme.spacing(13),
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: 230,
        marginTop: -200,
        padding: theme.spacing(3, 1),
      }
    },
    '& $properties': {
      overflow: 'hidden'
    },
  },
  portrait: {
    flexDirection: 'column',
    '& $desc': {
      marginTop: -200,
      padding: theme.spacing(1),
      paddingTop: 230,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing(),
      }
    },
    '& $figure': {
      height: 200,
    }
  },
  /* Type */
  full: {
    overflow: 'hidden',
    position: 'relative',
    '& $figure': {
      borderRadius: 0
    }
  },
  round: {
    '& $figure': {
      margin: theme.spacing(1),
      overflow: 'hidden',
      borderRadius: theme.rounded.medium
    },
    '&$landscape': {
      '& figure': {
        [theme.breakpoints.down('xs')]: {
          margin: theme.spacing(1)
        }
      }
    }
  },
  oval: {
    overflow: 'hidden',
    '&$portrait': {
      '& $figure': {
        width: '120%',
        marginLeft: '-10%',
        overflow: 'hidden',
        borderRadius: '0 0 50% 50%',
      }
    },
    '&$landscape': {
      '& $figure': {
        overflow: 'hidden',
      },
      '& $media': {
        borderRadius: '0 50% 50% 0 !important',
        height: '120% !important',
        marginTop: '-10%',
      },
    }
  },
  over: {
    overflow: 'visible',
    '& $figure': {
      boxShadow: theme.shadows[8],
    },
    '&$portrait': {
      '& $figure': {
        margin: theme.spacing(-2, 2, 0),
        [theme.breakpoints.down('xs')]: {
          height: 180
        },
        '& img': {
          width: '100%'
        }
      }
    },
    '&$landscape': {
      '& $figure': {
        width: 150,
        height: 150,
        margin: 0,
        marginLeft: theme.spacing(-2),
        [theme.breakpoints.down('xs')]: {
          width: '93%',
          margin: '0 auto',
          height: 180
        },
        '& img': {
          height: '100%',
          minWidth: '100%',
          [theme.breakpoints.down('xs')]: {
            height: 'auto',
            width: '100%'
          }
        }
      }
    }
  }
}));

export default cardsStyles;
