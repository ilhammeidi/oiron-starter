import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uiState from '~/theme/config';
import SiteMap from './SiteMap';
import Blog from './Blog';
import Contact from './Contact';
import Basic from './Basic';

function Main(props) {
  const [state] = useReducer(null, uiState);
  const { toggleDir } = props;

  return (
    <div>
      { state.footer === 'basic' && <Basic />}
      { state.footer === 'blog' && <Blog toggleDir={toggleDir} />}
      { state.footer === 'contact' && <Contact />}
      { state.footer === 'sitemap' && <SiteMap toggleDir={toggleDir} />}
    </div>
  );
}

Main.propTypes = {
  toggleDir: PropTypes.func.isRequired
};

export default Main;
