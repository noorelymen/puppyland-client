import React from 'react';
import './placeholder.css';

const Placeholder = ({ type }) => {
  let className = 'placeholder';

  if (type === 'breed') {
    className += ' breed-placeholder';
  } else if (type === 'puppy') {
    className += ' puppy-placeholder';
  }

  return (
    <div className="placeholder-card">
      <div className="placeholder-photo">
        <div src="" className="placeholder-card-image" />
      </div>
      <div className="placeholder-details">
        <div className="placeholder-name"></div>
        <div className="placeholder-notation"></div>
        <div className="placeholder-deets-row">
          <div className="placeholder-breed"></div>
          <div className="placeholder-gender"></div>
        </div>
        <hr />
        <div className="placeholder-deets-row">
            <div className="placeholder-location"></div>
            <div className="placeholder-age"></div>
        </div>
        <div className="placeholder-action-btns">
          <div className="placeholder-details-btn placeholder-btn"></div>
          <div className="placeholder-adopt-btn placeholder-btn"></div>
        </div>
       </div>
    </div>
  );
};

export default Placeholder;
