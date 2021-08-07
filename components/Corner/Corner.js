import React, { useReducer } from 'react';
import uiState from '~/theme/config';
import PageNav from '../PageNav';
import Chat from '../Chat';

function Corner() {
  const [state] = useReducer(null, uiState);
  return (
    <div>
      { state.corner === 'chat' && <Chat /> }
      { state.corner === 'nav' && <PageNav /> }
    </div>
  );
}

export default Corner;
