import React from 'react'
import './sidebar.css'
import SideBarOptions from './sidebar_options/SiderBarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../../core/data/dataProvider';
function SideBar() {
    const [{playlists},]= useDataLayerValue();
  return (
    <div className='sidebar'>
        <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
        
        <SideBarOptions title='Home' Icon={HomeIcon}></SideBarOptions>
        <SideBarOptions title='Search' Icon={SearchIcon}></SideBarOptions>
        <SideBarOptions title='Your Library' Icon={LibraryMusicIcon}></SideBarOptions>
       <br />
       <strong className='sidebar__title'>Playlists</strong>
       <hr />
       {/* <SideBarOptions title='Hip Hop'></SideBarOptions>
       <SideBarOptions title='Rock'></SideBarOptions>
       <SideBarOptions title='EDM'></SideBarOptions> */}
       
            {playlists?.items?.map((playlist) => (
                <SideBarOptions title={playlist.name} />
              ))}
        
        </div>
  )
}

export default SideBar;