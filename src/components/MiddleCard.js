import React, { useState, useEffect } from 'react'

function MiddleCard()
{
    return (
        <div className="wrapper">
        <div className="card">
            <img src="/images/colleges.png"/>
            <div className="descriptions">
                
                <p>
                100+ ​FULLTIME/ EXECUTIVE DEVELOPMENT PROGRAMS AT PRE-EMINENT UNIVERSITIES
                </p>
            </div>
            
        </div>
        <div className="card">
            <img src="/images/companies.png"/>
           
            <div className="descriptions">
                
                <p>
                50+  renowned High Potential  (Hi-Po) Executive Leadership Development programs  of Top Tier Organisations
                </p>
            </div>
        </div>
        <div className="card">
            <img  src="/images/leaders.png"/> 
           
            <div className="descriptions">
                
                <p> 
                   Inspiration of 500 of the foremost world leaders like Dr.A P J Abdul Kalam, visionaries and pioneers like JRD Tata, business Legends like Warren Buffett, Futurists like Dr. Micho Kaku and many more.
                </p>
            </div>

        </div>


        </div>
   
    )

}

export default MiddleCard;