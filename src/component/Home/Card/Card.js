import React from 'react';
import './Card.css';
function Card(props) {
  return (
    <div className='card'>
      <img src={props.image} alt='card__img' />
      <div className='card__info'>
        <strong>{props.mainInfo}</strong>
        <p>{props.subInfo}</p>
      </div>
    </div>
  );
}

export default Card;
