import React from 'react';
import './BigCard.css';
function BigCard(props) {
  return (
    <div className='bigCard'>
      <img src={props.image} alt='card__info' />
      <strong>{props.info}</strong>
      <p>{props.subInfo}</p>
    </div>
  );
}

export default BigCard;
