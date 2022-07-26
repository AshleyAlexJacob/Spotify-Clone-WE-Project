import React from 'react'
import './sidebarOption.css';
function SideBarOptions({title,Icon,setPlaylists,id}) {
  return (
    <div className='sidebarOption' onClick={()=>{setPlaylists(id)}}>
      {Icon&& <Icon className="sidebarOption__icon"></Icon>}
       {
        Icon? <h4>{title}</h4>:  <p>{title}</p>
   
       } </div>
  )
}

export default SideBarOptions