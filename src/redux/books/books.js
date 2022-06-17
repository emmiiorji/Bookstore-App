import { v4 as uuidv4 } from 'uuid';

// Actions
const Actions = {
  ADD: 'bookstore/book/ADD',
  REMOVE: 'bookstore/book/REMOVE',
};

const stateInit = [
  {
    id: uuidv4(),
    topic: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: uuidv4(),
    topic: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Economy',
  },
  {
    id: uuidv4(),
    topic: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Science Fiction',
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
