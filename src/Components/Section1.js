import React from 'react';
// import capture from './capture.PNG';
import laptop from '../laptop.svg';
// import 'tachyons';
import './Section1.css'
import NavBar from './NavBar'

const Section1=() =>{


return (

    <div className= "section1"> 
         <NavBar></NavBar>
         <div className="header1">
               <h1 className='f1 lh-title'> Click the install file to finish up.</h1>
         </div>
         <div id='paraheader2' className=' fw4 f5 lh-copy'>

               <p id="para2">If your download didn't start,<u> try again </u>.</p>
               <p id="para2"> Having issues? <u>Visit the Microsoft Store</u> to download.</p>
         </div>
               <img id="laptop" src={laptop} alt="logo" />
         </div>

);

}

export default Section1;