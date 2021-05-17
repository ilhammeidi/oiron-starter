export const initialState = {
  header: 'header',
  footer: 'sitemap',
  corner: 'chat'
};

function reducer(state, action) {
  switch (action.type) {
    case 'set_header':
      return {header: action.payload};
    case 'set_footer':
      return {footer: action.payload};
    case 'set_corner':
      return {corner: action.payload};
    default:
      throw new Error();
  }
}

export default reducer;