 
//  https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 
 export const authorizationEndPoint = 'https://accounts.spotify.com/authorize?';

const spotifyClientId = '9eefe24d6a494274adc4c63bf4378cb5';

 //  add the same redirect uri as mentioned in the dashboard of spotify developer

const redirectUrl ="http://localhost:3000/";

const scopes = [
    
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

 
  export const loginUrlString = `${authorizationEndPoint}response_type=token&client_id=${spotifyClientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&show_dialog=true`;



