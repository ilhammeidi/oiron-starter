import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Logo from '../Logo';
import link from '~/public/text/link';
import SearchField from './TopNav/SearchField';
import Settings from './TopNav/Settings';
import useStyles from './header-style';
import multiple from './data/multiple';
import MultiLevel from './TopNav/MultiLevelClick';
import MobileMenu from './SideNav/MultiMobile';

function BlogHeader(props) {
  const [fixed, setFixed] = useState(false);

  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                <a href={link.starter.home}>
                  <Logo type="landscape" />
                </a>
              </div>
              {isDesktop && (
                <div className={classes.mainMenu}>
                  <MultiLevel dataMenu={multiple} />
                </div>
              )}
            </nav>
            <nav>
              <Hidden xsDown>
                <SearchField short />
              </Hidden>
              { isDesktop && <span className={classes.vDivider} /> }
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </nav>
          </div>
          <Hidden smUp>
            <SearchField />
          </Hidden>
        </Container>
      </AppBar>
    </Fragment>
  );
}

BlogHeader.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default BlogHeader;
