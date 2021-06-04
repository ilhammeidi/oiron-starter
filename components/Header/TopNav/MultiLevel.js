import React, {
  useState,
  useEffect,
  useRef,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from '../header-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function ChildMenu(props) {
  const {
    menu,
    anchor,
    item,
    closeParent,
    toggle,
    close
  } = props;


  // Child state
  const [menuChild, setMenuChild] = useState([]);
  const [anchorChild, setAnchorChild] = useState({});

  // const mainAnchor = anchorChild ? anchorChild[item.id] : null;
  // const openMenu = menuChild ? menuChild.indexOf(item.id) > -1 : false;

  // Child function
  const handleToggleChild = (event, name) => {
    console.log(name);
    setMenuChild([...menuChild, name]);
    setAnchorChild({
      ...anchorChild,
      [name]: event.currentTarget
    });
  };

  const handleCloseChild = (event, name) => {
    const index = menuChild.indexOf(name);
    setMenuChild(currentName => currentName.filter((n, i) => i !== index));
    setAnchorChild({
      ...anchorChild,
      [name]: null
    });
  };
  return (
    <Popper anchorEl={anchor[item.id] || null} open={menu.indexOf(item.id) > -1} placement="right-start" transition disablePortal>
      {({ TransitionPropsChild, placement }) => (
        <Grow
          {...TransitionPropsChild}
          style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center top' }}
        >
          <Paper>
            <MenuList id="menu-list-grow">
              {item.child ? (
                <MenuItem
                  onClick={closeParent}
                  onMouseEnter={(e) => toggle(e, item.id)}
                  onMouseLeave={(e) => close(e, item.id)}
                >
                  {item.name}
                  <ChildMenu
                    item={item}
                    menu={menuChild}
                    anchor={anchorChild}
                    toggle={handleToggleChild}
                    close={handleCloseChild}
                    closeParent={closeParent}
                  />
                  <ListItemIcon>
                    <ChevronRightIcon fontSize="small" />
                  </ListItemIcon>
                </MenuItem>
              ) : (
                <MenuItem onClick={closeParent}>{item.name}</MenuItem>
              )}
            </MenuList>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

ChildMenu.propTypes = {
  item: PropTypes.object.isRequired,
  anchor: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  closeParent: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

function MultiLevel(props) {
  const classes = useStyles();
  const { dataMenu } = props;

  // Parent state
  const [open, setOpen] = useState(false);
  const [menuName, setName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  // Child state
  const [menuChild, setMenuChild] = useState([]);
  const [anchorChild, setAnchorChild] = useState({});

  // Parent function
  const handleToggle = (event, name) => {
    setOpen((newOpen) => !newOpen);
    setName(name);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setName('');
    setOpen(false);
  };

  // Child function
  const handleToggleChild = (event, name) => {
    setMenuChild([...menuChild, name]);
    setAnchorChild({
      ...anchorChild,
      [name]: event.currentTarget
    });
  };

  const handleCloseChild = (event, name) => {
    const index = menuChild.indexOf(name);
    setMenuChild(currentName => currentName.filter((n, i) => i !== index));
    setAnchorChild({
      ...anchorChild,
      [name]: null
    });
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <ul className={classes.multiMenu}>
      {dataMenu.map((item, index) => (
        <Fragment key={index.toString()}>
          {item.child ? (
            <li
              onMouseEnter={(e) => handleToggle(e, item.name)}
              onMouseLeave={(e) => handleClose(e)}
              ref={anchorRef}
            >
              <div>
                <Button endIcon={<Icon>expand_more</Icon>}>{item.name}</Button>
                <Popper open={menuName === item.name} anchorEl={anchorEl} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList autoFocusItem={open} id="menu-list-grow">
                            {item.child.map((subitem, indexChild) => (
                              <div key={indexChild.toString()}>
                                {subitem.child !== undefined ? (
                                  <MenuItem
                                    onClick={handleClose}
                                    onMouseEnter={(e) => handleToggleChild(e, subitem.id)}
                                    onMouseLeave={(e) => handleCloseChild(e, subitem.id)}
                                  >
                                    {subitem.name}
                                    <ChildMenu
                                      item={subitem}
                                      closeParent={handleClose}
                                      menu={menuChild}
                                      anchor={anchorChild}
                                      toggle={handleToggleChild}
                                      close={handleCloseChild}
                                    />
                                    <ListItemIcon>
                                      <ChevronRightIcon fontSize="small" />
                                    </ListItemIcon>
                                  </MenuItem>
                                ) : (
                                  <MenuItem onClick={handleClose}>
                                    {subitem.name}
                                  </MenuItem>
                                )}
                              </div>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </li>
          ) : (
            <li key={index.toString()}>
              <div>
                <Button href={item.link}>{item.name}</Button>
              </div>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
}

MultiLevel.propTypes = {
  dataMenu: PropTypes.array.isRequired
};

export default MultiLevel;
