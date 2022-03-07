import React from 'react';

import './Card.scss';

function Card(props) {
  var {name, image, link} = props;

  return (
    <div className='card' onClick={() => window.open(link, '_blank')}>
      <img src={image} alt='not found'></img>
      <div className='card-name'>{name}</div>
    </div>
  );
}

export default Card;