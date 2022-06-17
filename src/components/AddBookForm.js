import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    const [name, value] = [e.target.name, e.target.value];
    if (value.trim() === '') e.target.value = '';
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, item_id: uuidv4() }));
    document.getElementById('addBook').reset();
  };
  return (
    <div className="addBookContainer">
      <h2>Add New Book</h2>
      <form name="addBook" onSubmit={handleSubmit} id="addBook">
        <input type="text" name="title" placeholder="Book title" required onChange={handleChange} />
        <input type="text" name="author" placeholder="Book author" required onChange={handleChange} />
        <select name="category" className="inputs" required onChange={handleChange}>
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

export default AddBookForm;
