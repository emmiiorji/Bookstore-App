// Actions
const Actions = {
  ADD: 'bookstore/book/ADD',
  REMOVE: 'bookstore/book/REMOVE',
};

const stateInit = [
  {
    id: 1,
    topic: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    topic: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    topic: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

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
