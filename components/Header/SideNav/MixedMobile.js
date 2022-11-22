import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { useTranslation } from 'next-i18next';
import useStyles from '../sidenav-style';
import navMenu from '../data/single';
import navPage from '../data/sample-pages';
import link from '~/public/text/link';

function MixedMobile(props) {
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
    <Collapse in={menu.samplePage || false} timeout="auto" unmountOnExit>
      {item.map((subitem, index) => (
        <List
          key={index.toString()}
          className={classes.groupChild}
          component="div"
          disablePadding
          subheader={(
            <ListSubheader
              className={classes.titleMega}
              disableSticky
              component="div"
              id="nested-list-subheader"
            >
              {subitem.name}
            </ListSubheader>
          )}
        >
          {subitem.child.map((granditem, indexChild) => (
            <ListItem
              key={indexChild.toString()}
              className={clsx(
                classes.noChild,
                curURL === curOrigin + langPath + granditem.link ? classes.current : ''
              )}
              component="a"
              href={granditem.link}
              button
            >
              <ListItemText className={classes.menuList} primary={granditem.name} />
            </ListItem>
          ))}
        </List>
      ))}
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
          <List component="nav" className={classes.sideSinglelv}>
            {navMenu.map((item, index) => (
              <ListItem
                button
                index={index.toString()}
                component="a"
                href={`#${item}`}
                key={item}
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                <ListItemText primary={item} className={classes.menuList} />
              </ListItem>
            ))}
            <ListItem
              button
              className={expand.samplePage ? classes.currentParent : ''}
              onClick={() => handleToggle('samplePage')}
            >
              <ListItemText className={classes.menuList} primary={t('header_sample_page')} />
              {expand.samplePage ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            { childMenu(expand, navPage) }
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

MixedMobile.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MixedMobile;
