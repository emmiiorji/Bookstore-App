// Actions
const Actions = {
  ADD_BOOK: 'bookstore/book/ADD',
  REMOVE_BOOK: 'bookstore/book/remove',
};

// Reducer
const reducer = (state = [], action) => {
  const { payLoad } = action;
  switch (action.type) {
    case Actions.ADD_BOOK:
      return [...state, payLoad.book];
    case Actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({ type: Actions.ADD_BOOK, payLoad: { book } });

export const removeBook = (id) => ({ type: Actions.REMOVE_BOOK, payLoad: { id } });

export default reducer;
