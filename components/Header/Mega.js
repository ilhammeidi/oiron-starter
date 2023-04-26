import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo';
import link from '~/public/text/link';
import MobileMenu from './SideNav/MegaMobile';
import HeaderMenu from './TopNav/MegaMenu';
import UserMenu from './TopNav/UserMenu';
import useStyles from './header-style';
import mega from './data/mega';

function Mega(props) {
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState({});
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
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

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggle = (id) => {
    if (openMenu[id] !== undefined) {
      console.log('isi');
      setOpenMenu({
        ...openMenu,
        [id]: !openMenu[id],
      });
      setTimeout(() => {
        setOpenMenu({ [id]: !openMenu[id] });
      }, 100);
    } else {
      console.log('kosong');
      setOpenMenu({
        ...openMenu,
        [id]: true
      });
      setTimeout(() => {
        setOpenMenu({ [id]: true });
      }, 100);
    }
  };

  const handleClose = () => {
    setOpenMenu({});
  };

  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        position="relative"
        id="header"
        className={cx(
          classes.header,
          openMenu && classes.noShadow,
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
                  className={cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                <a href={link.starter.home}>
                  <Logo type="landscape" />
                </a>
              </div>
              {isDesktop && (
                <ClickAwayListener onClickAway={handleClose}>
                  <div className={classes.mainMenu}>
                    <HeaderMenu
                      open={openMenu}
                      dataMenu={mega}
                      toggle={handleToggle}
                    />
                  </div>
                </ClickAwayListener>
              )}
            </nav>
            <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Mega.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default Mega;
