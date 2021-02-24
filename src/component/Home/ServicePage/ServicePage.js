import React from 'react';
import './ServicePage.css';
import StarIcon from '@material-ui/icons/Star';
import ShareIcon from '@material-ui/icons/Share';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import WifiIcon from '@material-ui/icons/Wifi';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import TvIcon from '@material-ui/icons/Tv';
import VideocamIcon from '@material-ui/icons/Videocam';
import Search from '../../../Search';
function ServicePage() {
  return (
    <div className='servicePage'>
      <div className='servicePage__overview'>
        <div className='servicePage__overview__header'>
          <div className='servicePage__overview__header-name'>
            <h2>Lagom Homestay✯French apartment✯Quiet room</h2>
            <div className='ratingInfo'>
              <div className='rating' style={{ display: 'flex' }}>
                <StarIcon />
                <p>4.90</p>
              </div>
              <div className='host-review'>
                <p>Friendly Host</p>
              </div>
              <div className='address'>
                <p>Wall streets New York City</p>
              </div>
            </div>
          </div>
          <div
            className='servicePage__overview-header-option'
            style={{ display: 'flex' }}>
            <div className='share' style={{ display: 'flex' }}>
              <ShareIcon />
              <a>Share</a>
            </div>
            <div className='save' style={{ display: 'flex' }}>
              <SaveAltIcon />
              <a>Save</a>
            </div>
          </div>
        </div>
        <div className='servicePage__overview__picture'>
          <div className='big-pic'>
            <img
              src='https://a0.muscache.com/im/pictures/45fecdc9-b295-4421-8822-38439ca6bd38.jpg?im_w=960'
              alt='big-pic'
            />
          </div>
          <div className='other-pic'>
            <img
              src=' https://a0.muscache.com/im/pictures/df6ef945-6b9f-4fd3-a230-bef2824d3a3f.jpg?im_w=720'
              alt='small-pic'
            />
            <img
              src='https://a0.muscache.com/im/pictures/0830ca61-2bb5-4d3e-b600-600a2abb7115.jpg?im_w=720'
              alt='small-pic'
            />
            <img
              src='https://a0.muscache.com/im/pictures/c73b31d5-a35e-4b30-b19b-82194a309941.jpg?im_w=720'
              alt='small-pic'
            />
            <img
              src='https://a0.muscache.com/im/pictures/380edbc9-261c-412a-8e79-b2b2a526292c.jpg?im_w=720'
              alt='small-pic'
            />
          </div>
        </div>
        <div className='servicePage__overview__footer'>
          <h3>All the house belong to Mr.Hieu</h3>
          <p>
            Includes 3 living room, 1 bedroom, 1 bed, 1 toilet with all the
            functionality
          </p>
        </div>
      </div>
      <div className='servicePage__allInfo'>
        <div className='servicePage__mainInfo'>
          <div className='servicePage__info'>
            <div className='info-item'>
              <HomeIcon />
              <div>
                <strong>All the house</strong>
                <p>You can have your own house</p>
              </div>
            </div>
            <div className='info-item'>
              <MeetingRoomIcon />
              <div>
                <strong>Get your own room</strong>
                <p>You can get your own room with safety key</p>
              </div>
            </div>

            <div className='info-item'>
              <LocalLaundryServiceIcon />
              <div>
                <strong>All way clean and tidy</strong>
                <p>This place is always tidy</p>
              </div>
            </div>

            <div className='info-item'>
              <EventAvailableIcon />
              <div>
                <strong>Cancel property</strong>
                <p>You can cancel any time in a day</p>
              </div>
            </div>

            <div className='info-item'>
              <MenuBookIcon />
              <div>
                <strong>The house Rules</strong>
                <p>You can set your own rules for your own house</p>
              </div>
            </div>
          </div>
          <div className='servicePage__contact'>
            <p>
              Our Lagom Homestay is an apartment on the 3rd floor of an old
              French villa of center Hanoi, designed to give you a truly
              getaway. This is a perfect spot to immerse into local street life
              and experience traditional, religious practices. You will have
              quiet, peaceful moment watching the street from our high balcony.
            </p>
            <strong>Place to live</strong>
            <p>
              {' '}
              ≤THE HOUSE≥ Our place is an apartment on the 3rd floor of an old
              French vil… <strong>find out more</strong>
            </p>
            <strong> Contact to house host</strong>
          </div>
          <div className='servicePage__feature'>
            <div className='feature'>
              <h4>Convenience</h4>
              <div className='list-feature'>
                <div className='feature-item'>
                  <WifiIcon />
                  <p>Strong wifi</p>
                </div>
                <div className='feature-item'>
                  <LocalDiningIcon />
                  <p> Free dinner</p>
                </div>
                <div className='feature-item'>
                  <AcUnitIcon />
                  <p>Basic thing</p>
                </div>
                <div className='feature-item'>
                  <TvIcon />
                  <p>Televsion</p>
                </div>
                <div className='feature-item'>
                  <VideocamIcon />
                  <p>Has camera</p>
                </div>
              </div>
              <div className='feature__button'>
                <p>More detail</p>
              </div>
            </div>
            {/* add react day range */}
            <div className='feature__rangeDate'>
              <Search />
            </div>
          </div>
        </div>
        <div className='servicePage__register'>
          <div className='register__form'>
            <label>
              <strong>$30/night</strong>
            </label>

            <form>
              <div>
                {' '}
                <input type='text' placeholder='order' />
                <input type='text' placeholder='return ' />
              </div>
              <input type='number' placeholder='1 guest' />
            </form>
            <button>Check the room</button>
          </div>
        </div>
      </div>
      <div className='service__review'></div>
    </div>
  );
}

export default ServicePage;
