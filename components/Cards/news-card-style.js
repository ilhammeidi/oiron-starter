import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'news_card' })((theme, _params, classes) => ({
  figure: {},
  newsCard: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(8)
    },
    [`& .${classes.figure}`]: {
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
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  },
  /* Orientation */
  landscape: {
    marginBottom: theme.spacing(5),
    [`& .${classes.figure}`]: {
      minWidth: 150,
      maxWidth: 200
    },
    [`& .${classes.desc}`]: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
        marginLeft: theme.spacing(-12),
        paddingLeft: theme.spacing(13),
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 230,
        marginTop: -200,
        padding: theme.spacing(3, 1),
      }
    },
    [`& .${classes.properties}`]: {
      overflow: 'hidden'
    },
  },
  portrait: {
    flexDirection: 'column',
    [`& .${classes.desc}`]: {
      marginTop: -200,
      padding: theme.spacing(1),
      paddingTop: 230,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing(),
      }
    },
    [`& .${classes.figure}`]: {
      height: 200,
    }
  },
  /* Type */
  full: {
    overflow: 'hidden',
    position: 'relative',
    [`& .${classes.figure}`]: {
      borderRadius: 0
    }
  },
  round: {
    [`& .${classes.figure}`]: {
      margin: theme.spacing(1),
      overflow: 'hidden',
      borderRadius: theme.rounded.medium
    },
    [`&.${classes.landscape}`]: {
      '& figure': {
        [theme.breakpoints.down('sm')]: {
          margin: theme.spacing(1)
        }
      }
    }
  },
  oval: {
    overflow: 'hidden',
    [`&.${classes.portrait}`]: {
      [`& .${classes.figure}`]: {
        width: '120%',
        marginLeft: '-10%',
        overflow: 'hidden',
        borderRadius: '0 0 50% 50%',
      }
    },
    [`&.${classes.landscape}`]: {
      [`& .${classes.figure}`]: {
        overflow: 'hidden',
      },
      [`& .${classes.media}`]: {
        borderRadius: '0 50% 50% 0 !important',
        height: '120% !important',
        marginTop: '-10%',
      },
    }
  },
  over: {
    overflow: 'visible',
    [`& .${classes.figure}`]: {
      boxShadow: theme.shadows[8],
    },
    [`&.${classes.portrait}`]: {
      [`& .${classes.figure}`]: {
        margin: theme.spacing(-2, 2, 0),
        [theme.breakpoints.down('sm')]: {
          height: 180
        },
        '& img': {
          width: '100%'
        }
      }
    },
    [`&.${classes.landscape}`]: {
      [`& .${classes.figure}`]: {
        width: 150,
        height: 150,
        margin: 0,
        marginLeft: theme.spacing(-2),
        [theme.breakpoints.down('sm')]: {
          width: '93%',
          margin: '0 auto',
          height: 180
        },
        '& img': {
          height: '100%',
          minWidth: '100%',
          [theme.breakpoints.down('sm')]: {
            height: 'auto',
            width: '100%'
          }
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
