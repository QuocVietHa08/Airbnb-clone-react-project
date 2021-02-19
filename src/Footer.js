import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__up'>
        <div className='footer__upInfo'>
          <ul>
            <li>
              <strong>Introduction</strong>
            </li>
            <li>How do we work</li>
            <li>The new</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li>HotelTonigth</li>
            <li>Airbnb for work</li>
            <li>Olympic</li>
            <li>Job opportunity</li>
          </ul>
        </div>
        <div className='footer__upInfo'>
          <ul>
            <li>
              <strong>Community</strong>
            </li>
            <li>Variety and a Feeling of Home</li>
            <li>Facilities suitable for people with disabilitiesw</li>
            <li>Airbnb affiliate partners</li>
            <li>Accommodation for the front linee</li>
            <li>Invite Friend</li>
            <li>Airbnb.org</li>
          </ul>
        </div>
        <div className='footer__upInfo'>
          <ul>
            <li>
              <strong>Guest welcome</strong>
            </li>
            <li>Rent a house</li>
            <li>Online experience</li>
            <li>Real experience</li>
            <li>Helping center</li>
            <li>Resoucer center</li>
            <li>Community center</li>
          </ul>
        </div>
        <div className='footer__upInfo'>
          <ul>
            <li>
              <strong>Helping</strong>
            </li>
            <li>The way we deal with COVID 19</li>
            <li>Helping center</li>
            <li>How to cancel</li>
            <li>Helping people</li>
            <li>Trust and safe</li>
          </ul>
        </div>
      </div>
      <div className='footer__down'>
        <div className='footer__downOne'>
          <p>@2021 Airbnb, Inc. All right reserved</p>
          <p>.Privacy</p>
          <p>.Rule</p>
          <p>.Website Map</p>
        </div>
        <div className='footer__downTwo'>
          <LanguageIcon />
          <p>English</p>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
