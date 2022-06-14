// Actions
const CHECK = 'bookstore/categories/CHECK';

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action Creators
export const checkCategory = () => ({ type: CHECK });

export default reducer;
