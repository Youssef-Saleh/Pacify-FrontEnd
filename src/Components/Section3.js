import React from 'react';
import alldevices from '../alldevices.svg';
import './Section3.css'



const Section3 =() => {



 return (
    <div className="section3 ">
        <img id="alldevices" src={alldevices} alt="logo" />
        <div className="header4">
            <h2 id="h2section3" className="fw9 lh-copy">One account, listen everywhere!</h2>
        </div>
        <div className='list tc'>
          <a className="para3" href="#"> MOBILE </a>
          <a className="para3" href="#"> COMPUTER </a>
          <a className="para3" href="#"> TABLET</a>
          <a className="para3" href="#">CAR</a>
          <a className="para32" href="#">PLAYSTATION </a>
          <a className="para32" href="#">XBOX </a>
          <a className="para32" href="#">TV </a>
          <a className="para32" href="#">SPEAKER </a>
          <a className="para32" href="#">WEB PLAYER </a>
        </div>
        
    </div>
    );
        
        
    
        

}

export default Section3