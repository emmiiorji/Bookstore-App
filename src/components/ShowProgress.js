import React from 'react';
import PropTypes from 'prop-types';

const ShowProgress = ({ completedPercent, currentChapter, handleUpdateProgress }) => (
  <div className="showProgress">
    <div className="showCompleted">
      <p>{`${completedPercent}%`}</p>
      <p>Completed</p>
    </div>
    <div className="showProgress">
      <p>Current Chapter</p>
      <p>{currentChapter}</p>
      <button type="button" className="progress-btn" onClick={handleUpdateProgress}>Update Progress</button>
    </div>
  </div>
);

ShowProgress.propTypes = {
  completedPercent: PropTypes.number.isRequired,
  currentChapter: PropTypes.string.isRequired,
  handleUpdateProgress: PropTypes.func.isRequired,
};

export default ShowProgress;
