import React from 'react';
import PropTypes from 'prop-types';
import ShowProgress from './ShowProgress';

const Book = (props) => {
  const {
    category, title, author, progress,
  } = props;

  return (
    <div className="bookContainer">
      <div>
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
      <ul className="reactionsContainer">
        <li className="reaction">Comments</li>
        <li className="reaction">Remove</li>
        <li className="reaction">Edit</li>
      </ul>
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
