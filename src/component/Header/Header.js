import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <img
        src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
        alt='headerIcon'
        className='header__icon'
      />
      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <button>
          <Link to='/login'>
            <Avatar />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;