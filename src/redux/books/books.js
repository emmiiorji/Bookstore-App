// Actions
const Actions = {
  ADD: 'bookstore/book/ADD',
  REMOVE: 'bookstore/book/REMOVE',
};

const stateInit = [];

// Reducer
const reducer = (state = stateInit, action) => {
  const { payLoad } = action;
  switch (action.type) {
    case Actions.ADD:
      return [...state, payLoad.book];
    case Actions.REMOVE:
      return state.filter((book) => book.id !== payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({ type: Actions.ADD, payLoad: { book } });

export const removeBook = (id) => ({ type: Actions.REMOVE, payLoad: { id } });

export default reducer;
