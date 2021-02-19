import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Banner.css';
import Search from '../../../Search';
import SearchIcon from '@material-ui/icons/Search';
import Destination from './Destination';
import Guest from './Guest';
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const [showDestination, setDestination] = useState(false);
  const [showGuest, setShowGuest] = useState(false);
  return (
    <div className='banner'>
      <div className='banner__search'>
        {/* Destination  */}
        <button
          onClick={() => {
            setDestination(!showDestination);
          }}>
          <strong> Set destination</strong>
          <input
            type='text'
            placeholder='Where are you want to go'
            className='banner__destination'
          />
        </button>
        {showDestination && <Destination />}
        {/* Add date */}
        <butaton
          onClick={() => {
            setShowSearch(!showSearch);
          }}>
          <strong> Set date</strong>
          <p>Find your perfect time?</p>
        </butaton>
        {showSearch && <Search />}
        {/* Guest */}
        <button
          onClick={() => {
            setShowGuest(!showGuest);
          }}>
          <strong>Set Guest</strong>
          <p>Invite more people with you</p>
        </button>
        {showGuest && <Guest />}
        <button className='banner__searchButton'>
          <SearchIcon className='banner__searchIcon' />
        </button>
      </div>
      <div className='banner__info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button variant='outlined'>Explore NearBy</Button>
      </div>
    </div>
  );
}

export default Banner;
