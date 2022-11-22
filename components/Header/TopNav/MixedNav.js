import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Scrollspy from 'react-scrollspy';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Icon from '@material-ui/core/Icon';
import { useTranslation } from 'next-i18next';
import useStyles from '../header-style';
import navMenu from '../data/single';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MixedNav(props) {
  const { t, i18n } = useTranslation('common');
  const {
    menuPrimary,
    menuSecondary,
    open,
    toggle,
    close,
    singleNav,
  } = props;
  const classes = useStyles();

  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
    toggle();
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  return (
    <Scrollspy
      items={navMenu}
      currentClassName="active"
    >
      {menuPrimary.map(item => (
        <li key={item.id.toString()}>
          {singleNav ? (
            <Button component={AnchorLink} offset={() => 100} href={item.url}>
              {t('starter-landing.header_' + item.name)}
            </Button>
          ) : (
            <Button href={'/' + item.url}>
              {t('starter-landing.header_' + item.name)}
            </Button>
          )}
        </li>
      ))}
      <li>
        <div>
          <Button
            onClick={(e) => handleToggle(e)}
            ref={anchorRef}
            endIcon={<Icon>expand_more</Icon>}
          >
            {t('header_sample_page')}
          </Button>
          <Popper
            open={open}
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
                  <ClickAwayListener onClickAway={close}>
                    <Container maxWidth="md">
                      <Grid container spacing={1}>
                        {menuSecondary.map((subitem, index) => (
                          <Grid item sm={3} key={index.toString()}>
                            <ListSubheader disableSticky component="div" className={classes.titleMega}>
                              {subitem.name}
                            </ListSubheader>
                            <img src={subitem.thumb} alt="thumbnail" className={classes.thumbMenu} />
                            <List component="div">
                              {subitem.child.map((item, subIndex) => (
                                <ListItem
                                  key={subIndex.toString()}
                                  button
                                  component="a"
                                  href={item.link}
                                  selected={curURL === (curOrigin + langPath + item.link)}
                                >
                                  <ListItemText
                                    primary={t('header_' + item.name)}
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
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </li>
    </Scrollspy>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  menuSecondary: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  singleNav: PropTypes.bool,
};

MixedNav.defaultProps = {
  singleNav: false
};

export default MixedNav;
