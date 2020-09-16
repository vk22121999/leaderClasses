import React from 'react';
import Header from './components/Header'
import Item from './components/Item';
import Middle from './components/Middle';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <div className="top">
      <Navbar/>
      <Header/>
      </div>
      
      <Middle/>
      <div className="footer">
  <div className="inner-footer">


    <div className="footer-items">
      <h1>Leader Classes</h1>
      <p>All trademarks, logos & intellectual property featured belong to their respective owners. They do not endorse us in any way.</p>
    </div>
    <div className="footer-items" >
    <div className="social-media">
      <a href="https://www.instagram.com/leaderclassesofficial/"><img className="footerimg" src={"/images/instagram.svg"}/></a>  
      <a href="https://www.linkedin.com/company/leaderclasses"><img className="footerimg"src={"/images/linkedin.svg"}/></a>   
         <a href="https://twitter.com/leaderclasses"><img className="footerimg"src={"/images/twitter.svg"}/></a>   
        </div> 
      </div>

    <div className="footer-items "> 
       
          <a href="https://www.leaderclasses.com/contact">Contact</a>
          <a href="https://www.leaderclasses.com/privacy">Privacy</a>
          <a href="https://www.leaderclasses.com/terms-and-conditions">Terms</a>
        
    </div>
    

    
     

       
 
  </div>

  <div className="footer-bottom">
    Copyright &copy; LeaderClasses 2020.
  </div>
</div>

    </div>

  );
}

export default App;
