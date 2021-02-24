import React from 'react';
import './Host.css';
import { Link } from 'react-router-dom';
import { protectWay } from './HostData';
function host() {
  return (
    <div className='host'>
      <div className='host__header'>
        <Link to='/'>
          <img
            src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
            alt='airbnb__logo'
            className='host__headerLogo'
          />
        </Link>
        <div>
          <button>Begin</button>
        </div>
      </div>
      <div className='host__main'>
        <div className='host__mainOne'>
          <div>
            <h1>Become a host</h1>
            <p>What type of house do you want to rent</p>
            <select>
              <option>All the house</option>
              <option>Privacy Room</option>
              <option>Share house</option>
            </select>
            <p>How many people do you want to have</p>
            <input type='number' />
            <p>Where do you live now</p>
            <input type='text' />
            <button>Begin</button>
          </div>
        </div>
        <div className='host__mainTwo'>
          <h2>Guest Welcome</h2>
          <div>
            <div className='host__guestItem'>
              <img
                src='https://a0.muscache.com/im/pictures/969a398f-5131-4c7c-af87-62fbf39f9854.jpg?im_q=highq&im_w=480'
                alt='guest__image'
              />
              <strong>The rules are set by you</strong>
              <p>
                Decide how many guests can stay in your place, length of stay
                and any additional rules you want them to follow
              </p>
              <a href='#'>Find out more</a>
            </div>
            <div className='host__guestItem'>
              <img src='https://a0.muscache.com/im/pictures/d04921d2-6064-440e-a18a-488406a2d3d4.jpg?im_q=highq&im_w=480' />
              <strong>The rules are set by you</strong>
              <p>
                Decide how many guests can stay in your place, length of stay
                and any additional rules you want them to follow
              </p>
              <a href='#'>Find out more</a>
            </div>
            <div className='host__guestItem'>
              <img
                src='https://a0.muscache.com/im/pictures/0d2e1b83-db57-4e75-952c-9b53eec0c46b.jpg?im_q=highq&im_w=480'
                alt='guest__image'
              />
              <strong>The rules are set by you</strong>
              <p>
                Decide how many guests can stay in your place, length of stay
                and any additional rules you want them to follow
              </p>
              <a href='#'>Find out more</a>
            </div>
            <div className='host__guestItem'>
              <img
                src='https://a0.muscache.com/im/pictures/66f93645-d028-4983-b739-235cd667c60c.jpg?im_q=highq&im_w=480'
                alt='guest__image'
              />
              <strong>The rules are set by you</strong>
              <p>
                Decide how many guests can stay in your place, length of stay
                and any additional rules you want them to follow
              </p>
              <a href='#'>Find out more</a>
            </div>
          </div>
        </div>
        <div className='host__mainThree'>
          <h2>The way we protect hoster</h2>
          <div>
            {protectWay.map((item) => (
              <div className='host__project'>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <a>{item.moreInfo}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default host;
