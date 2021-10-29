import React, { useReducer } from 'react';
import uiState from '~/theme/config';
import SiteMap from './SiteMap';
import Blog from './Blog';
import Contact from './Contact';
import Basic from './Basic';

function Main() {
  const [state] = useReducer(null, uiState);
  return (
    <div>
      { state.footer === 'basic' && <Basic />}
      { state.footer === 'blog' && <Blog />}
      { state.footer === 'contact' && <Contact />}
      { state.footer === 'sitemap' && <SiteMap />}
    </div>
  );
}

export default Main;
