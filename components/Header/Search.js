import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Logo from '../Logo';
import link from '~/public/text/link';
import SearchField from './TopNav/SearchField';
import UserMenu from './TopNav/UserMenu';
import useStyles from './header-style';

function Search(props) {
  const [fixed, setFixed] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
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

  return (
    <AppBar
      position="relative"
      id="header"
      className={clsx(
        classes.header,
        fixed && classes.fixed,
      )}
    >
      <Container>
        <div className={classes.headerContent}>
          <nav className={clsx(classes.navMenu, classes.flex)}>
            <div className={classes.logo}>
              <a href={link.starter.home}>
                <Logo type="landscape" />
              </a>
            </div>
            {isDesktop && (
              <SearchField />
            )}
          </nav>
          <UserMenu onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        </div>
        <Hidden smUp>
          <SearchField />
        </Hidden>
      </Container>
    </AppBar>
  );
}

Search.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Search;
