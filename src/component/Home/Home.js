import React from 'react';
import Banner from './HomeComponent/Banner';
import City from './HomeComponent/City';
import './Home.css';
import Feature from './HomeComponent/Feature';
function Home() {
  return (
    <div className='home'>
      <Banner />
      {/* main City */}
      <City />
      {/* main-feature */}
      <Feature />
    </div>
  );
}

export default Home;
