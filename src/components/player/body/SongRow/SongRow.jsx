import React from 'react'
import './songrow.css';

function SongRow({track,playSong}) {
  return (
    <div className="songrow" onClick={() => playSong(track.id)}>
                <img className='songrow__album' src={track.album.images[0].url} alt="Album Art" />
            <div className="songrow__info">
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist)=> artist.name).join(',','')}
                    {track.album.name}
                    </p>
            </div>
    </div>
  )
}

export default SongRow