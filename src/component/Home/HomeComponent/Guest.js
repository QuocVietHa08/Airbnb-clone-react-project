import React from 'react';
import './Guest.css';
import PeopleIcon from '@material-ui/icons/People';
function Guest() {
  return (
    <div className='guest'>
      <h3>Number of Guest</h3>
      <PeopleIcon />
      <input type='number' min={0} defaultValue={2} />
    </div>
  );
}

export default Guest;
