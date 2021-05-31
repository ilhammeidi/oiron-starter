import React, { useReducer } from 'react';
import Header1 from './Header';
import Header2 from './Header2';
import Header3 from './Header3';
import reducer, { initialState } from '~/reducer/ui';

function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.header);
  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch({ type: 'set_header', payload: 'header' })}>Header</button>
        <button type="button" onClick={() => dispatch({ type: 'set_header', payload: 'header2' })}>Header2</button>
        <button type="button" onClick={() => dispatch({ type: 'set_header', payload: 'header3' })}>Header3</button>
      </div>
      { state.header === 'header' && <Header1 />}
      { state.header === 'header2' && <Header2 />}
      { state.header === 'header3' && <Header3 />}
    </div>
  );
}

export default Header;
