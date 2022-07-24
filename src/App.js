import './App.css';
import Login from './components/login/Login';
import React,{useEffect} from 'react';
import { getTokenFromUrl } from './core/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player.jsx';
import { useDataLayerValue } from './core/data/dataProvider';

const spotify = new SpotifyWebApi();

function App() {
  // going to use useEffect hook to pull up the access token to manage the state
//  Run the piece of code on basis of a condition

// useEffect(() => {
// }, [run only once when app.js renders] or [name of variables you want to run this code])
const [{user,token},dispatch] = useDataLayerValue();
  useEffect(() => {
    const hashObject = getTokenFromUrl();
    window.location.hash='';
    const _token = hashObject.access_token;
    if(_token) {
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        dispatch({
          type:'SET_USER',
          user:user
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        console.log('Playlist Length: ',playlists.items.length);
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists
        
        });
        spotify.getPlaylist('37i9dQZEVXcOTpzpRS2aDN').then((playlists)=>{
          console.log('Im Here');
          dispatch({
            type:'SET_DISCOVER_WEEKLY',
            discover_weekly:playlists
          
          });
        });
      });
    }
    // console.log('Token >>> ',_token);
    },)
    
    console.log('Token >>> ',token);
     
  console.log('User ', user);
  return (
    <div className="App">
      {/* Spotify Logo */}
      
      {
        token? <Player spotify={spotify}/> :  <Login/>

      }
    
      {/* Login with Spotify */}


    </div>
  );
}

export default App;
