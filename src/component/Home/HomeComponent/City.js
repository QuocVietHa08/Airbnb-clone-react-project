import React from 'react';
import './City.css';
import { data } from '../../../CardInfo';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
function City() {
  return (
    <div className='city'>
      {data.map((cardItem) => (
        <Link to='/search'>
          <Card
            id={cardItem.id}
            image={cardItem.img}
            mainInfo={cardItem.mainInfo}
            subInfo={cardItem.subInfo}
          />
        </Link>
      ))}
    </div>
  );
}

export default City;
