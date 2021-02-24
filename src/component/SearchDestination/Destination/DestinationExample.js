import React from 'react';
import './DestinationExample.css';
import SimpleSlider from './SimplesSlider/SimpleSlider';
import StarIcon from '@material-ui/icons/Star';
import { destinationData } from '../DestinationData';
import { Link } from 'react-router-dom';
function DestinationExample() {
  return (
    <div className='destinationExample'>
      {destinationData.map((item) => (
        <Link to='/search/destination' className='link'>
          <div className='destination__slider'>
            <div className='slider'>
              <SimpleSlider
                imag1={item.imag1}
                imag2={item.imag2}
                imag3={item.imag3}
                imag4={item.imag4}
              />
            </div>

            <div className='destination__info'>
              <div className='destination__infoTitle'>
                <small>Privacy room at New York City</small>
                <p>{item.title}</p>
              </div>
              <div className='destination__infoMain'>
                <p>
                  {item.numberGuest} guest . {item.numberRoom} room .{' '}
                  {item.numberBed} bed
                </p>
              </div>
              <div className='destination__infoFooter'>
                <div className='destination__rating'>
                  <StarIcon />
                  {item.rating}
                </div>
                <div className='destination__price'>
                  <strong>{item.price}</strong>/night
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DestinationExample;
