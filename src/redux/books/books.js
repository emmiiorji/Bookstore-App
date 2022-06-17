import axios from 'axios';
import { bookURL, deleteBookURL } from '../../services/api';

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
      return state.filter((book) => book.item_id !== payLoad.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post(bookURL(), book);
    if (response.status === 201) {
      return dispatch({
        type: Actions.ADD,
        payLoad: { book },
      });
    }
    throw new Error();
  } catch (error) {
    return 'Could not save book';
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(deleteBookURL(id));
    if (response.status === 201) {
      return dispatch({
        type: Actions.REMOVE,
        payLoad: { id },
      });
    }
    throw new Error();
  } catch (error) {
    return 'Could not delete book';
  }
};

export default reducer;
