import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1; // Start index from 1
        return (<>
            <FaStar
            key={index}
            size={24}
            style={{ margin: '0.1em', cursor: 'pointer'}}
            color={(hoverRating || rating) >= index ? '#ffc107' : '#e4e5e9'}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        </>
        );
      })}
    </div>
  );
};

export default Star