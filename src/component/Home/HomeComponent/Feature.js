import React from 'react';
import './Feature.css';
import {
  featureData,
  experienceData,
  featureThirdData,
} from '../../../CardInfo';
import BigCard from '../BigCard/BigCard';
function Feature() {
  return (
    <div className='feature'>
      <div className='feature__one'>
        <h2>In any where</h2>
        <div className='feature__choice'>
          {featureData.map((item) => (
            <BigCard image={item.image} id={item.id} info={item.info} />
          ))}
        </div>
      </div>
      <div className='feature__second'>
        <h2>Experience The World</h2>
        <p>
          Unique activities with local professionals - participate in person or
          online.
        </p>
        <div className='feature__choice'>
          {experienceData.map((item) => (
            <BigCard
              image={item.image}
              id={item.id}
              info={item.info}
              subInfo={item.subInfo}
            />
          ))}
        </div>
      </div>

      <div className='feature__third'>
        <h2>Join with hundred of people all around the world</h2>
        <div className='feature__choice'>
          {featureThirdData.map((item) => (
            <BigCard image={item.image} id={item.id} info={item.info} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
