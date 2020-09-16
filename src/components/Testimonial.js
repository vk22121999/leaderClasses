import React, { useState, useEffect } from 'react';

function Testimonial(props)
{
    return(
        <div class="test-card">
            <div className="bio">
            <img className="dp" src={props.dp}/>
            <div className="name">{props.name}</div>
            <div className="post">{props.post}</div>
            <div className="company contentchange">{props.company}</div>
            </div>
            <div className="testcontent">
                <div className="container">
                <div className="text">
                {props.content}
                </div>
                </div>
                <div className="vid-div">
                <iframe frameborder="0"scrolling="no" allow="autoplay; fullscreen" className="videocard" src={props.vid}>
                 </iframe>
                </div>


                
            
            </div>
            
        </div>
    )
}

export default Testimonial;