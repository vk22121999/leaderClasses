import React, { useState, useEffect } from 'react'
import Navitem from './Navitem'
import { IconButton } from '@material-ui/core';
function NavBar()
{
    return (<div className="navbar">
        <div className="titlecontainer">
            <IconButton>
            <img alt="#icon"  className="cmpnyicon" src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5e1b1b8aa7d3a2414a34f47b_white_and_red_circle_music_logo_xXP_icon.ico"/>
            </IconButton>
        
     <div id="title">Leader Classes</div>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
    <ul id="navcontainer">
       <li> <Navitem name={"About"} linkto={"https://www.leaderclasses.com/about-us"}/></li>
      <li><Navitem name={"Careers"} linkto={"https://www.leaderclasses.com/careers"}/></li>
      <li> <Navitem name={"Free Online Program "} linkto={"https://www.leaderclasses.com/career-excellence-leadership-program"}/></li>
       <li> <Navitem name={"FAQ"} linkto={"https://www.leaderclasses.com/faq"}/></li>
    </ul>
   
    </div>)
}

export default NavBar;