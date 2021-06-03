import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Settings from './Settings';
import useStyles from '../header-style';

function UserMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <nav className={classes.userMenu}>
      { isDesktop && <Button href="#">Login</Button> }
      <Button variant="contained" color="primary" href="#">Register</Button>
      { isDesktop && <span className={classes.vDivider} /> }
      <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
    </nav>
  );
}

UserMenu.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default UserMenu;
