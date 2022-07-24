import React from 'react'
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

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footer__albumCover'alt='Album Cover' src='https://upload.wikimedia.org/wikipedia/en/6/6e/Pink_Floyd_-_Division_Bell.jpg'></img>
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>Usher</p>
          </div>
      </div>
      <div className="footer__center">
      
      <ShuffleIcon className='footer__green'></ShuffleIcon>
      <SkipPreviousIcon className='footer__icon'></SkipPreviousIcon>
      <PlayCircleFilledWhiteOutlinedIcon fontSize='large' className='footer__icon'></PlayCircleFilledWhiteOutlinedIcon>
      <SkipNextIcon className='footer__icon'></SkipNextIcon>
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