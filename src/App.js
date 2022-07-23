import './App.css';
import Login from './components/login/Login';
import React,{useEffect, useState} from 'react';
import { getTokenFromUrl } from './core/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player.jsx';

const spotify = new SpotifyWebApi();

function App() {
  // going to use useEffect hook to pull up the access token to manage the state
//  Run the piece of code on basis of a condition

// useEffect(() => {
// }, [run only once when app.js renders] or [name of variables you want to run this code])
const [token,setToken] = useState();
  useEffect(() => {
    const hashObject = getTokenFromUrl();
    window.location.hash='';
    const _token = hashObject.access_token;
    if(_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        console.log('User; ',user);
      });
    }
    console.log('Token >>> ',_token);
    }, [])
  
  return (
    <div className="App">
      {/* Spotify Logo */}
      
      {
        token? <Player/> :  <Login/>

      }
    
      {/* Login with Spotify */}


    </div>
  );
}

export default App;
