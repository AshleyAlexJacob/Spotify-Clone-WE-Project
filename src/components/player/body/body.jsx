import React from 'react';
import { useDataLayerValue } from '../../../core/data/dataProvider';
import Header from '../header/header';
import './body.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow/SongRow';



function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDataLayerValue();
  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:${discover_weekly.id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  const playSong = (id) => {
    console.log('Id',id);
    // alert(id);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify}></Header>
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>
            Playlist
          </strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>

      </div>
      <div className="body__songs">
        <div className="body__icons">
        <PlayCircleFilledIcon  className='body__shuffle'  onClick={discover_weekly ? playPlaylist : null}></PlayCircleFilledIcon>
        <FavoriteIcon fontSize='large'></FavoriteIcon>
        <MoreHorizIcon></MoreHorizIcon>
      </div>
      {
        discover_weekly?.tracks.items.map((item)=>
         ( <SongRow track={item.track} key={item.track.id} playSong={playSong}></SongRow>)
        )
      }      
      </div>
    </div>
  )
}

export default Body