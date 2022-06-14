// Actions
const ADD = 'bookstore/book/ADD';
const REMOVE = 'bookstore/book/remove';

// Reducer
const reducer = (state = [], action) => {
  const { payLoad } = action;
  switch (action.type) {
    case ADD:
      return [...state, payLoad.book];
    case REMOVE:
      return state.filter((book) => book.id !== payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({ type: REMOVE, payLoad: { book } });

export const removeBook = (id) => ({ type: ADD, payLoad: { id } });

export default reducer;
