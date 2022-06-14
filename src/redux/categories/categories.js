// Actions
const Actions = {
  CHECK: 'bookstore/categories/CHECK',
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case Actions.CHECK:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action Creators
export const checkCategory = () => ({ type: Actions.CHECK });

export default reducer;
