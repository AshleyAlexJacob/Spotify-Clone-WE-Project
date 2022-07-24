 
//  https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 
 export const authorizationEndPoint = 'https://accounts.spotify.com/authorize?';

// const spotifyClientId = '9eefe24d6a494274adc4c63bf4378cb5';
const spotifyClientId='06455159382e48e2a11fe2cd7fc9d26c';

 //  add the same redirect uri as mentioned in the dashboard of spotify developer

// const redirectUrl ="https://spotify-we.web.app/#";

const redirectUrl ="http://localhost:3000/";

const scopes = [
    
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

 export const getTokenFromUrl = ()=>{
  // fetch the token embedded in the url after hash
  return window.location.hash
          .substring(1)
          
          .split('&').reduce((initial,item)=>{
            // accessToken=sjsjjsjs2929nsus9202&name=
            let parts = item.split('=');
            initial[parts[0]]=decodeURIComponent(parts[1]);
            return initial;
            // pulling the access token 
          },{});
 }
  export const loginUrlString = `${authorizationEndPoint}response_type=token&client_id=${spotifyClientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&show_dialog=true`;



