import React from 'react';

const leftImage = require('./img/left.png');
const rightImage = require('./img/right.png');

// onClick, left

const Button = props => {
  const image = props.left ? leftImage : rightImage;
  const positionClass = props.left ? 'media-section-left' : 'media-section-right';

  return (
    <button className={`media-section-button ${positionClass}`} onClick={() => props.onClick(Boolean(props.left))}>
      <img src={image}/>
    </button>
  );
};

export default Button;
