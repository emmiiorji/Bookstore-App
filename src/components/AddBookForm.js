import React from 'react';
import PropTypes from 'prop-types';

const AddBookForm = ({ handleSubmit }) => (
  <div className="addBookContainer">
    <h2>Add New Book</h2>
    <form name="addBook" onSubmit={handleSubmit}>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <select name="category" className="inputs">
        <option value="" defaultValue>Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" className="add-btn">Add Book</button>
    </form>
  </div>
);

AddBookForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddBookForm;
