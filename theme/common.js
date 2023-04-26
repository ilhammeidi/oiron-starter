import { makeStyles } from 'tss-react/mui';

const sectionMargin = margin => (margin * 20);
// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useSpacing = makeStyles({ uniqId: 'spacing' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    '& ul[class="slick-dots"]': {
      '& li': {
        '& button:before': {
          borderColor: theme.palette.primary.main,
        },
        '&[class="slick-active"]': {
          '& button:before': {
            background: theme.palette.primary.main
          }
        }
      }
    }
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(4)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(4)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(4),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(2.4)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2.4)
    }
  },
  containerWrap: {
    marginTop: theme.spacing(5),
    '& > section': {
      position: 'relative'
    }
  },
  containerGeneral: {
    position: 'relative',
    paddingTop: 32,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32
    }
  },
  containerFront: {
    position: 'relative',
  },
  fullScreenContainer: {
    height: '100vh',
    display: 'flex'
  },
  maintenanceIcon: {
    margin: theme.spacing(3),
    background: theme.palette.divider,
    color: theme.palette.primary.main,
    width: 100,
    height: 100,
    '& svg': {
      fontSize: 64,
    },
  },
  btnNotify: {
    minWidth: 120,
    margin: 4
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const usePopup = makeStyles({ uniqId: 'popup' })(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useTextAlign = makeStyles({ uniqId: 'text_align' })({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFloat = makeStyles({ uniqId: 'float' })({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
});

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useText = makeStyles({ uniqId: 'text' })(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      lineHeight: '44px'
    },
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px',
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px',
    },
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      lineHeight: '22px',
    },
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  medium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  regular: {
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useHidden = makeStyles({ uniqId: 'hidden' })(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFlexBox = makeStyles({ uniqId: 'flexbox' })(() => ({
  justifyStart: {
    justifyContent: 'flex-star'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-star'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
}));

// TODO jss-to-tss-react codemod: Unable to handle style definition reliably. Unsupported arrow function syntax.
// Unexpected value type of ConditionalExpression.
// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export const useFlipRtl = makeStyles({ uniqId: 'flip_rtl' })(theme => ({
  transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
}));
