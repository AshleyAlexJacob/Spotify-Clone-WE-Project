import React, { useEffect }  from 'react'
import './footer.css';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Grid from '@mui/material/Grid/Grid';
import Slider from '@mui/material/Slider/Slider';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { useDataLayerValue } from '../../../core/data/dataProvider';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

function Footer({spotify}) {

  const [{ item, playing},dispatch]=useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
  
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  },);
  const handlePlayPauseFunctionality=()=>{
    if(playing){
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });

    }else {
      spotify.play().then(()=>{
        console.log('Started Playing');
      },(err)=>{
        console.log(err);
    
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  }

  const skipToNextSong = ()=>{
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) =>{
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  }

  const skipToPreviousSong = ()=>{
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((currentSong)=>{
      dispatch({
        type: "SET_ITEM",
        item: currentSong.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
      
    });
  }
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footer__albumCover'alt={item?.name} src={item?.album?.images[0].url}></img>
        {item ? (
          <div className="footer__songInfo">
            <h4>{item?.name}</h4>
            <p>{item?.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer__center">
      
      <ShuffleIcon className='footer__green'></ShuffleIcon>
      <SkipPreviousIcon  onClick={skipToPreviousSong} className='footer__icon'></SkipPreviousIcon>
      {playing ? (
          <PauseCircleIcon
            onClick={handlePlayPauseFunctionality}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleFilledWhiteOutlinedIcon
            onClick={handlePlayPauseFunctionality}
            fontSize="large"
            className="footer__icon"
          />
        )}
         <SkipNextIcon onClick={skipToNextSong} className='footer__icon'></SkipNextIcon>
      <RepeatRoundedIcon className='footer__green'></RepeatRoundedIcon>
      
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      
      </div>
    </div>
  )
}

export default Footer;