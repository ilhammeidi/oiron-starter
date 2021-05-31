import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Scrollspy from 'react-scrollspy';
import { withTranslation } from '~/i18n';
import useStyles from '../header-style';
import navMenu from '../data/single';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MixedNav(props) {
  const { menuPrimary, menuSecondary, t } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  console.log(menuSecondary);

  const handleToggle = (event) => {
    setOpen((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Scrollspy
      items={navMenu}
      currentClassName="active"
    >
      {menuPrimary.map(item => (
        <li key={item.id.toString()}>
          <Button component={AnchorLink} href={item.url}>{item.name}</Button>
        </li>
      ))}
      <li>
        <div>
          <Button
            onClick={(e) => handleToggle(e)}
            ref={anchorRef}
          >
            {t('common:header_sample_page')}
          </Button>
          <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <div className={classes.megaMenu}>
                      mega menu
                    </div>
                  </ClickAwayListener>
                </Paper>
              </Grow>
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
  t: PropTypes.func.isRequired
};

MixedNav.getInitialProps = async () => ({
  namespacesRequired: ['common', 'starter-landing'],
});

export default withTranslation(['common', 'starter-landing'])(MixedNav);
