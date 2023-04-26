import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from '../sidenav-style';
import navMenu from '../data/single';

function SingleNavMobile(props) {
  const { classes, cx } = useStyles();
  const { toggleDrawer, open } = props;
  const { t, i18n } = useTranslation('common');

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List className={classes.sideSinglelv}>
          {navMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={item}
              index={index.toString()}
            >
              <ListItemText primary={item} className={classes.menuList} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.userMenu}>
          {['login', 'register'].map((text, index) => (
            <ListItem
              key={index.toString()}
              className={cx(classes.noChild, curURL === curOrigin + langPath + '/' + text ? classes.current : '')}
              component="a"
              href={link.starter[text]}
              button
            >
              <ListItemText className={classes.menuList} primary={t('' + text)} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

SingleNavMobile.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SingleNavMobile;
