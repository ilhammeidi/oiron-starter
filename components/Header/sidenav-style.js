import { makeStyles } from '@material-ui/core/styles';

const identation = 8;
const sidenavStyles = makeStyles(theme => ({
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileNav: {
    background: theme.palette.background.paper,
    margin: theme.spacing(10, 0, 3),
    overflow: 'auto',
    position: 'relative'
  },
  sideMultilv: {
    padding: theme.spacing(3, 2, 0),
    '& > div': {
      marginLeft: 0,
    }
  },
  sideSinglelv: {
    padding: theme.spacing(3, 2),
  },
  userMenu: {
    padding: theme.spacing(2)
  },
  hasGrandChild: {
    padding: 0,
    '& > div': {
      marginLeft: 0
    }
  },
  noChild: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  menuList: {
    padding: theme.spacing(0.5, 0),
    '& span': {
      textTransform: 'capitalize',
      fontSize: 14,
    }
  },
  sideGroup: {
    paddingLeft: identation * 2,
    '& $menuList': {
      padding: theme.spacing(1, 0),
    }
  },
  groupChild: {
    padding: theme.spacing(2, 0, 2, 3)
  },
  sideGroupLink: {
    paddingLeft: identation
  },
  titleMega: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 11,
    color: theme.palette.primary.main
  },
  current: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  currentParent: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '& svg': {
      fill: theme.palette.primary.main
    }
  }
}));

export default sidenavStyles;
