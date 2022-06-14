// Actions
const Actions = {
  CHECK_CATEGORY: 'bookstore/categories/CHECK',
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case Actions.CHECK_CATEGORY:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action Creators
export const checkCategory = () => ({ type: Actions.CHECK_CATEGORY });

export default reducer;
