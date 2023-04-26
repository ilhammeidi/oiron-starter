import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'product_card' })((theme, _params, classes) => ({
  /* General */
  cardProduct: {
    position: 'relative',
    '& figure': {
      margin: 0
    }
  },
  mediaProduct: {
    height: 0,
  },
  title: {
    fontSize: 20,
    height: 30,
    fontWeight: theme.typography.fontWeightBold
  },
  hiddenLink: {
    display: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  desc: {
    padding: theme.spacing(2, 3),
    overflow: 'hidden'
  },
  property: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    '& strong': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 18
    }
  },
  text: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    }
  },
  ratting: {
    margin: '10px 0',
    '& button': {
      width: 24,
      height: 24
    }
  },
  button: {
    width: '100%',
    padding: `${theme.spacing(0.5, 3)} !important`,
    marginTop: theme.spacing(2)
  },
  /* Orientation */
  portrait: {
    maxWidth: 350,
    '& figure': {
      display: 'block',
      height: 170
    },
    [`& .${classes.property}`]: {
      marginTop: theme.spacing(2)
    },
    [`& .${classes.desc}`]: {
      padding: theme.spacing(2),
      '& p': {
        height: 90,
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box'
      }
    }
  },
  landscape: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      height: 150
    },
    '& figure': {
      width: 200,
      height: 150
    },
    [`& .${classes.desc}`]: {
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      [theme.breakpoints.down('sm')]: {
        width: '65%',
        padding: theme.spacing(2, 1),
        '& p': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }
    },
    [`& .${classes.button}`]: {
      width: 200,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    [`& .${classes.hiddenLink}`]: {
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      }
    }
  },
  /* Type */
  full: {
    overflow: 'hidden',
    '& figure': {
      borderRadius: 0
    }
  },
  round: {
    '& figure': {
      overflow: 'hidden',
      borderRadius: theme.rounded.medium,
      height: 134
    },
    [`&.${classes.portrait}`]: {
      '& figure': {
        position: 'relative',
        margin: theme.spacing(1)
      }
    },
    [`&.${classes.landscape}`]: {
      '& figure': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1)
      }
    }
  },
  oval: {
    overflow: 'hidden',
    [`&.${classes.portrait}`]: {
      '& figure': {
        height: 150,
        width: '120%',
        marginLeft: '-10%',
        overflow: 'hidden',
        borderRadius: '0 0 50% 50%',
      }
    },
    [`&.${classes.landscape}`]: {
      [theme.breakpoints.down('sm')]: {
        height: 150
      },
      '& figure': {
        overflow: 'hidden',
        borderRadius: '0 50% 50% 0 !important',
        height: 250,
        marginTop: -50
      }
    }
  },
  over: {
    overflow: 'visible',
    '& figure': {
      overflow: 'hidden',
      boxShadow: theme.shade.light,
      position: 'relative',
      borderRadius: theme.rounded.medium,
    },
    [`&.${classes.portrait}`]: {
      marginTop: theme.spacing(2),
      '& figure': {
        margin: theme.spacing(0, 2),
        top: theme.spacing(-2),
        marginBottom: theme.spacing(-2),
      }
    },
    [`&.${classes.landscape}`]: {
      marginLeft: theme.spacing(2),
      '& figure': {
        margin: theme.spacing(2, 0),
        height: 118,
        width: 140,
        left: theme.spacing(-2),
        marginRight: theme.spacing(-2),
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
