import React, { useState, useEffect } from 'react'
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      border: 0,
      fontFamily:'Taviraj',
      fontWeight:'400',
      borderRadius: 6,
      textTransform:"none",
      boxShadow: 'black',
      color: 'grey',
      height: 48,
      fontSize:'20px',
      padding: '0 30px',
    },
  });
function Header()
{   const classes = useStyles();
    return(
        <div className="header">
            <img src="images/headerimg.png" alt="#bg" className="headerimg"/>
            <div className="HeaderContent">
                
            <a href="#cf" className="contentchange">Leader Classes  harnesses </a>the world’s best <a href="#h" className=""> Career Advancement</a> & Leadership Development resources, helping           you gain Expert Knowledge, Practical Guidance & Actionable Insights from Extraordinary Leaders & World          Class Institutions through Specialized,  Affordable, Online & Offline Programs custom-crafted to <a href="#er" className="contentchangesmall">Accelerate             your Career</a> & Business Success while transforming you into a better & more effective Leader.
            <div className="headerbutton">
            <Button className={classes.root} href="https://www.leaderclasses.com/career-excellence-leadership-program" variant="contained" >Sign Up & know more</Button>
                </div>
            </div>
            
            <div>

            </div>
        </div>
    )
}
export default Header;