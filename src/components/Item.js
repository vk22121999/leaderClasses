import React from 'react';

function Item(props)
{
    return(
        <div className="item">
            <img className="itemimg" src={props.img} alt="#name"/>
            <div className="itemname">
                {props.name}
            </div>

        </div>
    )
}

export default Item;