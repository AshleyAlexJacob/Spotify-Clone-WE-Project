import React from 'react'
import Body from './body/body'
import SideBar from './sidebar/sidebar'
import Footer from './footer/footer'

import './player.css';

function Player({spotify}) {
  return (
    <div className='player'>
        <div className="player_body">

        <SideBar></SideBar>
        <Body></Body>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default Player