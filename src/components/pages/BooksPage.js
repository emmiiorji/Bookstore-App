import React from 'react';
import AllBooks from '../AllBooks';
import AddBookForm from '../AddBookForm';

const BooksPage = () => (
  <main>
    <AllBooks />
    <hr style={{
      border: 'none', height: '2px', background: '#f1f1f1', margin: '20px 0',
    }}
    />
    <AddBookForm />
  </main>
);

export default BooksPage;
