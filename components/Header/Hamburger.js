import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'next-i18next';
import routeLink from '~/public/text/link';
import Logo from '../Logo';
import useStyles from './header-style';
import UserMenu from './TopNav/UserMenu';
import navMenu from './data/single';

let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Hamburger(props) {
  const { t } = useTranslation('common');

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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

  const { classes, cx } = useStyles();
  const {
    onToggleDark,
    onToggleDir,
    home,
  } = props;
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

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Fragment>
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed ? classes.fixed : '',
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={cx(classes.navLogo, home && classes.invert)}>
              <IconButton
                onClick={handleOpenDrawer}
                className={cx('hamburger hamburger--squeeze', classes.mobileMenu, openDrawer && 'is-active')}
                size="large"
              >
                <span className="hamburger-box">
                  <span className={cx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
              <div className={cx(classes.logo, classes.flex)}>
                {home ? (
                  <LinkBtn href="#home">
                    <Logo type="only" />
                  </LinkBtn>
                ) : (
                  <Link href={routeLink.starter.home}>
                    <a>
                      <Logo type="only" />
                    </a>
                  </Link>
                )}
              </div>
              <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
            </nav>
          </div>
        </Container>
      </AppBar>
      <Fade in={openDrawer}>
        <div className={cx(classes.paperNav, openDrawer && classes.show)}>
          <div className={classes.mobileNav}>
            {openDrawer && (
              <ul className={classes.menu}>
                {menuList.map((item, index) => (
                  <li key={item.id.toString()} style={{ animationDuration: index * 0.15 + 's' }}>
                    {home ? (
                      // eslint-disable-next-line
                      <Button component={LinkBtn} onClick={handleCloseDrawer} offset={item.offset || 0} href={item.url}>
                        {t('starter-landing.header_' + item.name)}
                      </Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button href={'/' + item.url}>
                        {t('starter-landing.header_' + item.name)}
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}

Hamburger.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  home: PropTypes.bool,

};

Hamburger.defaultProps = {
  home: false
};

export default Hamburger;
