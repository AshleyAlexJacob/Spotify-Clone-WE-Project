import React from 'react'
import Body from './body/body'
import SideBar from './sidebar/sidebar'
import Footer from './footer/footer'

import './player.css';

function Player({spotify}) {
  return (
    <div className='player'>
        <div className="player_body">

        <SideBar spotify={spotify}></SideBar>
        <Body spotify={spotify}></Body>
        </div>
      <Footer spotify={spotify}></Footer>
    </div>
  )
}

export default Player