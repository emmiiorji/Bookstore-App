import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <div>
      {books.map((book) => (
        <Book
          topic={book.topic}
          title={book.title}
          author={book.author}
          key={book.id}
          id={book.id}
          category={book.category}
        />
      ))}
    </div>

  );
};

export default Books;
