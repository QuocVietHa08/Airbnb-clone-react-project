import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseIcon from '@material-ui/icons/Close';
import { suggestionLanguage, languageArea } from './LanguageData';
function Header(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
          alt='headerIcon'
          className='header__icon'
        />
      </Link>
      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header__right'>
        <div>
          <Link to='/host'>
            <p>Become a host</p>
          </Link>
        </div>
        <div variant='primary' onClick={handleShow}>
          <LanguageIcon />
        </div>
        <div>
          <ExpandMoreIcon />
        </div>
        <div>
          <button>
            <Link to='/login'>
              <Avatar />
            </Link>
          </button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='header__modal'
        style={{ width: '80%' }}>
        <Modal.Header>
          <CloseIcon onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className='header__modalBody'>
          <div className='modal__container'>
            <strong>Language and currency</strong>
            <p>Suggestion language</p>
            <div>
              {suggestionLanguage.map((item) => (
                <div className='header__languageItem'>
                  <div>{item.name}</div>
                  <div>{item.country}</div>
                </div>
              ))}
            </div>
            <p>Choose language and language Code</p>
            <div className='modal__languageCode'>
              {languageArea.map((item) => (
                <div class='header__languageItem'>
                  <div>{item.name}</div>
                  <div> {item.code}</div>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
