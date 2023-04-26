import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useTranslation } from 'next-i18next';
import useStyles from '../sidenav-style';
import navMenu from '../data/single';
import navPage from '../data/sample-pages';
import link from '~/public/text/link';

function MixedMobile(props) {
  const { classes, cx } = useStyles();
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
              className={cx(
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
    </SwipeableDrawer>
  );
}

MixedMobile.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MixedMobile;
