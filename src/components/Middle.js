import React, { useState, useEffect } from 'react'
import MiddleCard from './MiddleCard'
import Testimonial from './Testimonial'
import Item from "./Item"
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
    link:
    {
        fontFamily:'Taviraj',
       textTransform:'initial',
      fontWeight:'400',
      fontSize:'20px',
      color:'blue'

    }
  });

function Middle()
{   const classes = useStyles();
    return (
        <div className="middle">
            <div className="middleHeading">
            How do we train ?
            </div>
            <div className="middletext">
                Relentlessly track and learn from 
            </div>
            
            <MiddleCard/>
            
            <div className="blocks">
            <div className="text">
             And  Ingesting an extra-ordinary amount of this exceptionally valuable content on 100+ topics of Strategic Importance from 
             </div> 
             <div className="items">


            
            <Item name={"Conferences"} img={"/images/conference.svg"}/>
            <Item name={"Documentaries"} img={"/images/documentary.svg"}/>
            <Item name={"Interviews"} img={"/images/meeting.svg"}/>
            <Item name={"Reports"} img={"/images/writing.svg"}/>
            <Item name={"Videos"} img={"/images/video-player.svg"}/>
            <Item name={"Blogs"} img={"/images/blogging.svg"}/>
            <Item name={"Podcasts"} img={"/images/podcast.svg"}/>
            
            </div>
            <div className="text">
            Curates and Harmounisly blends this with our rich experience of partnering with over 1000+ Senior Management / Executive level leaders and 35+ world-class organizations primarily in India and the US 
for nearly two decades, guiding and learning from our earlier ventures.

             </div>
         
           </div>
           <div className="middleHeading">
            We deliver
            </div>
           <div className="header">
               <img className="headerimg" src="/images/Classes1.png"/>
               <div className="HeaderContent">
                  
          Contextualize and structures this into simple ,extremely affordable , highly valuable, exceptional leadership development programs Relevant to your career stage and business needs.
          <div className="">

 Delivered via specialized affordable, high Impact "LeaderClasses Career Advancement and Leadership Development Programs and summits (when ever logically feasible )" designed to advance the career and build / Strengthen the Leadsership Foundations, of our program particapants.
 
 
                       </div>
                       <div className="headerbutton">
                       <Button className={classes.root} href="https://www.leaderclasses.com/career-excellence-leadership-program" variant="contained" >Sign Up & know more</Button>
                  </div>
                   </div>
                   
           </div>
          
           <div className="middleHeading">
            Leaders Testimonials
            </div>
           <div className="tcontainer">
              <Testimonial vid={"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FuqHOL4TwKgE%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuqHOL4TwKgE&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FuqHOL4TwKgE%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"} dp={"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5f36a0232d3c6c0f7d3f0b1c_LeaderClassesImageofRamGopalChiefExecutiveOfficerBarclaysIndia.jpg"} name={"Ram Gopal"} post={ " Chief Executive Officer"}   company={"Barclays India"} content={" An MBA from the University of Chicago & a CFA charter holder, Ram brings over 26+ of experience gained at Citibank, Standard Chartered & Barclays across various geographies & divisions to his current responsibility of designing & executing country strategy for Barclays in India , with accountability for financial performance & market position for the Bank."}/>
                
                <div className="hr"/>
                 <Testimonial vid={"https://www.youtube.com/embed/mcSfla42Gw4?enablejsapi=1&origin=https%3A%2F%2Fwww.leaderclasses.com"} dp={"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5f36a0435bcd9247c8f7d070_LeaderClassesImageofGunjanSrivastavaChairmanRegionAsiaPacificBoardBosch%20SiemensHomeAppliances.jpeg"} name={"Gunjan Srivastava"} post={"Chairman"}   company={"Region Asia Pacific Board. Bosch Siemens Home Appliances"} content={" An Alumnus of IIT-BHU & IIMA, Gunjan brings over 28+ years at work at Gillette, Philips,Sennheiser & Bosch Siemens in Strategy, Consumer Marketing & Market Development across Europe & Asia to his current role as Chairman of the Region Asia Pacific Board of Bosch Siemens Home Appliances Asia Pacific Business."}/>
                 <div className="hr"/>
                <Testimonial vid={"https://www.youtube.com/embed/AsMavf_vcOw?enablejsapi=1&origin=https%3A%2F%2Fwww.leaderclasses.com"} dp={"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5f36a0673450a2fca97580f5_LeaderClassesImageofAchintSetiaVicePresidentMarketingMyntra.jpeg"} name={"  Achint Setia"} post={"Vice President Marketing"}   company={"Myntra"} content={" An ISB Alumnus, Achint is an Industry Fast Tracker from the TMT sector, bringing his experience at Microsoft, McKinsey & Viacom across Product Development, Strategy, Corporate Development, Innovation & Market Development to his current role of building Myntra leveraging his Digital Strategy & Execution expertise."}/>
                <div className="hr"/>
           </div>
                
                
                <div className="middleHeading">
            Campus Partners
            </div>
            <div className="container">
            <div className="middletext">
            LeaderClasses is at a very interesting phase of its growth & is actively looking to expand our Campus Partnerships Pan-India. 
            </div>
            <div className="middletext contentchange">
            If you are an Institutional Representative of a University / College interested in building a relationship with us , we invite you to review our<div><Button className={classes.link} onClick={()=>{window.location.href="https://www.leaderclasses.com/campus-partners"}} color="primary">Campus Partners</Button>      </div> <div>page & submit your details via our Campus Partners form.</div>  
            </div>
            <div className="middletext">
            We look forward to hearing from you soon & will advise interest/next steps within 5 Business Days of receipt of your 
            </div>
            <div className="middletext"  >
                <Button color="primary" className={classes.link} onClick={()=>{window.location.href='https://www.leaderclasses.com/campus-partners-form';}}>
                Campus Partners Form
                    </Button>

            
            </div>
            <div className="middleHeading lastb" >
            <Button className={classes.root} variant="contained"  href="https://www.leaderclasses.com/leaderclasses-contact-form">
  Contact us
</Button>
            </div>
            </div>

        </div>
    )

}

export default Middle;