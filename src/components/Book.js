import React from 'react';
import PropTypes from 'prop-types';
import ShowProgress from './ShowProgress';

const Book = (props) => {
  const {
    category, title, author, progress,
  } = props;

  return (
    <div className="bookContainer">
      <ul>
        <li className="category">{category}</li>
        <li className="title">{title}</li>
        <li className="author">{author}</li>
      </ul>
      <div className="reactionsContainer">
        <button type="button" className="reaction">Comments</button>
        <button type="button" className="reaction">Remove</button>
        <button type="button" className="reaction">Edit</button>
      </div>
      <ShowProgress props={progress} />
    </div>
  );
};

const progressShape = {
  completedPercent: PropTypes.number,
  currentChapter: PropTypes.string,
  handleUpdateProgress: PropTypes.func,
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.shape(progressShape).isRequired,
};
export default Book;
