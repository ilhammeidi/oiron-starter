import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uiState from '~/theme/config';
import Mixed from './Mixed';
import Mega from './Mega';
import DropList from './DropList';
import NavScroll from './NavScroll';
import Search from './Search';
import Basic from './Basic';
import Blog from './BlogHeader';
import Hamburger from './Hamburger';

function Main(props) {
  const [state] = useReducer(null, uiState);
  const { home, onToggleDark, onToggleDir } = props;
  return (
    <div>
      { state.header === 'mixed' && <Mixed home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'mega' && <Mega onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'droplist' && <DropList onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'navscroll' && <NavScroll home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'search' && <Search onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'basic' && <Basic onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'blog' && <Blog onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'hamburger' && <Hamburger home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
    </div>
  );
}

Main.propTypes = {
  home: PropTypes.bool,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

Main.defaultProps = {
  home: false
};

export default Main;
