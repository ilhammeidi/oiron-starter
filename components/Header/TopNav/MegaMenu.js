import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import { i18n } from '~/i18n';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Icon from '@material-ui/core/Icon';
import useStyles from '../header-style';

function MegaMenu(props) {
  const {
    dataMenu,
    open,
    toggle
  } = props;
  const classes = useStyles();

  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (id, event) => {
    setAnchorEl(event.currentTarget);
    toggle(id);
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.options.localeSubpaths[i18n.language]);
  }, []);

  return (
    <ul className={classes.multiMenu}>
      {dataMenu.map((item, index) => (
        <li key={index.toString()}>
          <div>
            <Button
              onClick={(e) => handleToggle(item.id, e)}
              ref={anchorRef}
              endIcon={<Icon>expand_more</Icon>}
            >
              {item.name}
            </Button>
            <Popper
              open={open[item.id] || false}
              anchorEl={anchorEl}
              disablePortal={false}
              role={undefined}
              transition
              className={classes.megaMenuRoot}
            >
              {({ TransitionProps, placement }) => (
                <Fade
                  {...TransitionProps}
                  style={{ width: '100%', transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
                >
                  <Paper className={classes.megaMenu}>
                    <Container maxWidth="md">
                      <Grid container spacing={1}>
                        {item.child.map((subitem, childIndex) => (
                          <Grid item sm={3} key={childIndex.toString()}>
                            <ListSubheader
                              disableSticky
                              component="div"
                              classes={{
                                root: classes.titleMega
                              }}
                            >
                              {subitem.name}
                            </ListSubheader>
                            <img src={subitem.thumb} alt="thumbnail" className={classes.thumbMenu} />
                            <List component="div">
                              {subitem.child.map((granditem, grandChildIndex) => (
                                <ListItem
                                  key={grandChildIndex.toString()}
                                  button
                                  className={classes.menuItem}
                                  component="a"
                                  href={granditem.link}
                                  selected={curURL === (curOrigin + langPath + granditem.link)}
                                >
                                  <ListItemText
                                    primary={granditem.name}
                                    classes={{
                                      primary: classes.menuList
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Grid>
                        ))}
                      </Grid>
                    </Container>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        </li>
      ))}
    </ul>
  );
}

MegaMenu.propTypes = {
  dataMenu: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.object.isRequired
};

export default MegaMenu;
