import React, {
  useState,
  useEffect,
  Fragment,
  useRef
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import logo from '~/public/images/logo.svg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import useStyles from './header-style';
import navMenu from './menu';

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

function Header(props) {
  const [fixed, setFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuName, setName] = useState('');
  const [menuName2, setName2] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const anchorRef = useRef(null);

  const handleToggle = (event, name) => {
    setOpen((prevOpen) => !prevOpen);
    setName(name);
    setAnchorEl(event.currentTarget);
  };

  const handleToggle2 = (event, name) => {
    setName2(name);
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log('mouse leasve');
    setName('');
    setOpen(false);
  };

  const handleClose2 = (event) => {
    console.log('close2');
    setName2('');
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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

  const classes = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    //    createData(navMenu[1], '#' + navMenu[1]),
    //    createData(navMenu[2], '#' + navMenu[2]),
    //    createData(navMenu[3], '#' + navMenu[3]),
    //    createData(navMenu[4], '#' + navMenu[4]),
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
                <ul>
                  {menuList.map(item => (
                    <li
                      key={item.id.toString()}
                      onMouseEnter={(e) => handleToggle(e, item.name)}
                      onMouseLeave={(e) => handleClose(e)}
                      ref={anchorRef}
                    >
                      <div>
                        <Button>{item.name}</Button>
                        <Popper open={menuName === item.name} anchorEl={anchorEl} role={undefined} transition disablePortal>
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList autoFocusItem={open} id="menu-list-grow">
                                    <MenuItem
                                      onClick={handleClose}
                                      onMouseEnter={(e) => handleToggle2(e, 'profile')}
                                      onMouseLeave={(e) => handleClose2(e)}
                                    >
                                      Profile
                                      <Popper anchorEl={anchorEl2} open={menuName2 === 'profile'} placement="right-start" transition disablePortal>
                                        {({ TransitionProps, placement }) => (
                                          <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center top' }}
                                          >
                                            <Paper>
                                              <MenuList id="menu-list-grow">
                                                <MenuItem
                                                  onClick={handleClose}
                                                  onMouseEnter={(e) => handleToggle2(e, 'ihiw')}
                                                  onMouseLeave={(e) => handleClose2(e)}
                                                >
                                                  ihiw
                                                  <Popper anchorEl={anchorEl2} open={menuName2 === 'ihiw'} placement="right-start" transition disablePortal>
                                                    {({ TransitionProps, placement }) => (
                                                      <Grow
                                                        {...TransitionProps}
                                                        style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center top' }}
                                                      >
                                                        <Paper>
                                                          <MenuList id="menu-list-grow">
                                                            <MenuItem onClick={handleClose}>qwerty</MenuItem>
                                                            <MenuItem onClick={handleClose}>abc</MenuItem>
                                                            <MenuItem onClick={handleClose}>123456</MenuItem>
                                                          </MenuList>
                                                        </Paper>
                                                      </Grow>
                                                    )}
                                                  </Popper>
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>hjgyuftg</MenuItem>
                                                <MenuItem onClick={handleClose}>sdfsdfg</MenuItem>
                                              </MenuList>
                                            </Paper>
                                          </Grow>
                                        )}
                                      </Popper>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                      </div>
                    </li>
                   ))}
                </ul>
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

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default Header;
