import React from 'react';
import { loginUrlString } from '../../core/services/spotify';
import './login.css';

function Login() {
  return (
    // Spotify Logo

    // Login with Spotify Button
    <div className='login'>

    <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
    <a href={loginUrlString}>LOGIN WITH SPOTIFY</a>
    </div>
    
  );
}

export default Login;