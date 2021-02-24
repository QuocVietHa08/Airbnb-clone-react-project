import React, { useState, useEffect } from 'react';
import './SignIn.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import firebase from '../../../firebase';
import { useHistory } from 'react-router-dom';
function Avatar() {
  const [phone, setPhone] = useState('');
  const history = useHistory();
  const setUpTheRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };
  const onSignInSubmit = (event) => {
    console.log(phone);
    event.preventDefault();
    setUpTheRecaptcha();
    const phoneNumber = '+112345678911';
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        const code = window.prompt('enter the otp');
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
            console.log('user is sign in');
            history.push('/');
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            console.log('hello');
            alert(error.message);
          });
      })
      .catch((error) => {
        console.log('hi');
        // Error; SMS not sent
        alert(error.message);
      });
  };
  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    var providerFacebook = new firebase.auth.FacebookAuthProvider();
    var providerApple = new firebase.auth.OAuthProvider('apple.com');
    firebase
      .auth()
      .signInWithPopup(provider, providerFacebook, providerApple)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        alert('user is sign in ');
      } else {
        alert('user is not sign in yet');
      }
    });
  }, []);

  return (
    <div className='signIn'>
      <h2>Sign In </h2>
      <form onSubmit={onSignInSubmit}>
        <div id='recaptcha-container'></div>
        <PhoneInput
          country={'us'}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          className='signIn__input'
          style={{ margin: '0 auto', width: '100%', paddingLeft: '20px' }}
        />

        <small>We will use your phone number to register your account</small>
        <small>
          Try our example accouny.By just Press Continue and type:123456 into
          the prompt
        </small>
        <button type='submit'>Continue</button>
      </form>

      <p className='signIn__horizon'>Or</p>
      <div className='signIn__account' onClick={onSubmit}>
        <MailOutlineIcon className='signIn__icon' />
        <p>Continue with gmail</p>
      </div>
      <div className='signIn__account'>
        <FacebookIcon className='signIn__icon' onClick={onSubmit} />
        <p>Continue with Facebook</p>
      </div>

      <div className='signIn__account'>
        <AppleIcon className='signIn__icon' />
        <p>Continue with apple</p>
      </div>

      <div className='signIn__account'>
        <PhoneIcon className='signIn__icon' />
        <p>Continue with phone number</p>
      </div>
    </div>
  );
}

export default Avatar;
