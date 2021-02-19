import React from 'react';
import './City.css';
import { data } from '../../../CardInfo';
import Card from '../Card/Card';
function City() {
  return (
    <div className='city'>
      {data.map((cardItem) => (
        <Card
          id={cardItem.id}
          image={cardItem.img}
          mainInfo={cardItem.mainInfo}
          subInfo={cardItem.subInfo}
        />
      ))}
    </div>
  );
}

export default City;
