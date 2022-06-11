import React from 'react';
import Book from './Book';

const Books = () => {
  const booksData = [
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

  return (
    <div>
      {booksData.map((book) => (
        <Book topic={book.topic} title={book.title} author={book.author} key={book.id} />
      ))}
    </div>

  );
};

export default Books;
