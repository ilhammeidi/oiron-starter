import { makeStyles } from '@material-ui/core/styles';
import flag from '~/public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles(theme => ({
  fixed: {},
  openDrawer: {},
  header: {
    position: 'fixed',
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      boxShadow: theme.shadows[2],
      '& $logo': {
        '& img': {
          height: 32,
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
      },
      '& $vDivider': {
        minHeight: theme.spacing(3)
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
    }
  },
  noShadow: {
    boxShadow: 'none !important',
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      transition: 'all 0.3s ease',
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0),
      },
      display: 'flex'
    }
  },
  settingMenu: {
    width: 240
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block'
    },
    '& img': {
      transition: 'all 0.3s ease',
      minWidth: '100%',
      height: 48
    }
  },
  active: {},
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& ul li': {
      overflow: 'visible'
    }
  },
  mainMenu: {
    '& > ul': {
      listStyle: 'none',
      position: 'relative',
      '& > li': {
        display: 'inline-block',
        position: 'relative',
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        '&[class="active"]': {
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: 4,
            background: theme.palette.primary.main,
            bottom: -14,
            left: 0,
          }
        },
        '& button, & a': {
          textTransform: 'capitalize'
        }
      }
    }
  },
  userMenu: {
    '& > a': {
      margin: theme.spacing(0, 1),
    }
  },
  langMenu: {
    '& i': {
      ...flagIcon
    }
  },
  vDivider: {
    margin: theme.spacing(0, 1),
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    minHeight: theme.spacing(6)
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease'
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  megaMenuRoot: {
    width: '100%'
  },
  megaMenu: {
    marginTop: 20,
    padding: theme.spacing(4, 0),
    borderRadius: 0,
    maxHeight: 480,
    overflow: 'auto',
  },
  thumbMenu: {
    width: 200,
    height: 78,
    borderRadius: theme.rounded.small,
    margin: theme.spacing(0, 1, 2)
  },
  titleMega: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 11
  }
}));

export default headerStyles;
