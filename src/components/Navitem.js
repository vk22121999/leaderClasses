import React from 'react'
import { IconButton } from '@material-ui/core';

function Navitem(props)
{
    return (<div className="navitem">
        <IconButton>
        <a href={props.linkto}>
       <div className="navitemname">
        {props.name}
       </div>
       </a>
       </IconButton>
    </div>)
}

export default Navitem;