import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Collapse from '@material-ui/core/Collapse';
import { useTranslation } from 'next-i18next';
import useStyles from '../sidenav-style';
import navMenu from '../data/multiple';
import link from '~/public/text/link';

function MobileMenu(props) {
  const classes = useStyles();
  const { toggleDrawer, open } = props;
  const [expand, setExpand] = useState({});
  const { t, i18n } = useTranslation('common');

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (id) => {
    setExpand({
      ...expand,
      [id]: !expand[id]
    });
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  const childMenu = (menu, item) => (
    <Collapse in={menu[item.id] || false} timeout="auto" unmountOnExit>
      <List className={classes.sideGroup} component="div" disablePadding>
        {item.child.map((subitem, index) => {
          if (subitem.child) {
            return (
              <div key={index.toString()}>
                <ListItem
                  button
                  className={clsx(menu[subitem.id] ? classes.current : '', classes.hasGrandChild)}
                  onClick={() => handleToggle(subitem.id)}
                >
                  {menu[subitem.id] ? <ArrowDropUp /> : <ArrowDropDown />}
                  <ListItemText className={classes.menuList} primary={subitem.name} />
                </ListItem>
                { childMenu(expand, subitem) }
              </div>
            );
          }
          return (
            <ListItem
              key={index.toString()}
              className={clsx(
                classes.noChild,
                classes.sideGroupLink,
                curURL === curOrigin + langPath + subitem.link ? classes.current : ''
              )}
              component="a"
              href={subitem.link}
              button
            >
              <ListItemText className={classes.menuList} primary={subitem.name} />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
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
      <div
        className={classes.mobileNav}
        role="presentation"
      >
        <div className={open ? classes.menuOpen : ''}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.sideMultilv}
          >
            {navMenu.map((item, index) => {
              if (item.child) {
                return (
                  <div key={index.toString()}>
                    <ListItem
                      button
                      className={expand[item.id] ? classes.currentParent : ''}
                      onClick={() => handleToggle(item.id)}
                    >
                      <ListItemText className={classes.menuList} primary={item.name} />
                      {expand[item.id] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    { childMenu(expand, item) }
                  </div>
                );
              }
              return (
                <ListItem
                  key={index.toString()}
                  className={clsx(classes.noChild, curURL === curOrigin + langPath + item.link ? classes.current : '')}
                  button
                  href={item.link}
                >
                  <ListItemText className={classes.menuList} primary={item.name} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List className={classes.userMenu}>
            {['login', 'register'].map((text, index) => (
              <ListItem
                key={index.toString()}
                className={clsx(classes.noChild, curURL === curOrigin + langPath + '/' + text ? classes.current : '')}
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
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
