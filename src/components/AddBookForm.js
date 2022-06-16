import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
  });

  return (
    <div className="addBookContainer">
      <h2>Add New Book</h2>
      <form name="addBook" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" required />
        <input type="text" name="author" placeholder="Book author" required />
        <select name="category" className="inputs" required>
          <option value="" defaultValue>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="add-btn">Add Book</button>
      </form>
    </div>
  );
};

AddBookForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddBookForm;
