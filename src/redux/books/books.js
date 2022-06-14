// Actions
const ADD = 'bookstore/book/ADD';
const REMOVE = 'bookstore/book/remove';

// Action Creators
export const addBook = (book) => ({ type: REMOVE, payLoad: { book } });

export const removeBook = (id) => ({ type: ADD, payLoad: { id } });
