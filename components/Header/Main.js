import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uiState from '~/reducer/ui';
import Mixed from './Mixed';
import Mega from './Mega';

function Main(props) {
  const [state] = useReducer(null, uiState);
  const { home, onToggleDark, onToggleDir } = props;
  return (
    <div>
      { state.header === 'mixed' && <Mixed home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'mega' && <Mega onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
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
