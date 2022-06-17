import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Book from './Book';
import { loadBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div>
      {books.map((book) => (
        <Book
          topic={book.topic}
          title={book.title}
          author={book.author}
          key={book.item_id}
          id={book.item_id}
          category={book.category}
        />
      ))}
    </div>

  );
};

export default Books;
