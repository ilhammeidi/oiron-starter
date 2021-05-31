import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MobileMenu from './MobileMenu';
import Settings from './TopNav/Settings';
import HeaderMenu from './TopNav/MixedNav';
import logo from '~/public/images/logo.svg';
import '~/vendors/hamburger-menu.css';
import useStyles from './header-style';
import navMenu from './data/single';
import samplePages from './data/sample-pages';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Mixed(props) {
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
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3]),
    createData(navMenu[4], '#' + navMenu[4]),
  ]);
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
        <Container fixed>
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
                <AnchorLink href="#home">
                  <img src={logo} alt="logo" />
                </AnchorLink>
              </div>
              {isDesktop && (
                <div className={classes.mainMenu}>
                  <HeaderMenu menuPrimary={menuList} menuSecondary={samplePages} />
                </div>
              )}
            </nav>
            <nav className={classes.userMenu}>
              { isDesktop && <Button href="#">Login</Button> }
              <Button variant="contained" color="primary" href="#">Register</Button>
              { isDesktop && <span className={classes.vDivider} /> }
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Mixed.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default Mixed;
