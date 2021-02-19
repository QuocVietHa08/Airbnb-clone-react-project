import React from 'react';
import './Destination.css';
function Destination() {
  return (
    <div className='destination'>
      <img
        src='https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq'
        alt='destination_pic'
        className='destination__pic'
      />
      <p>Explore the beautiful near you</p>
    </div>
  );
}

export default Destination;
