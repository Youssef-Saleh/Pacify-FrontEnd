import React from 'react';
import './AboutS.css';
import iconS from '../iconS.JPG';
import instas from '../insta.png';
import facebook from '../facebook1.png';
import twitter from '../twitter1.png';
const AboutS=()=>{


    return(
        <footer>
            <div className="About">
                <div className="icon">
                <a href="#"> <img className="img1" src={iconS}/> </a>
            </div>
            <div className="company">
                <a href="#"> <h4 id="c">company</h4></a>
                <a href="#"><h4 id="C">About</h4></a> 
                <a href="#"><h4 id="C">For The Record</h4></a>
            </div>
            <div className="communities">
                <a href="#"> <h4 id="c">communities</h4></a>
                <a href="#"> <h4 id="C">for Artists</h4></a>
                <a href="#"><h4 id="C">developers</h4></a>
                <a href="#"><h4 id="C">Brands</h4></a>
            </div>
            <div className="usefulLinkes">
                <a href="#"> <h4 id="c">useful Linkes</h4></a>
                <a href="#"> <h4 id="C">Help</h4></a>
                <a href="#"><h4 id="C">Web Player</h4></a>
                <a href="#"><h4 id="C">free Mobile App</h4></a>

            </div>
            <div className="icons">
                <a href="#"><img className="imgi" src={instas}/></a>
                <a href="#"><img className="imgf" src={facebook}/></a>
                <a href="#"><img className="imgt" src={twitter}/></a>
            </div>

            </div>
        </footer>


    );
}
export default AboutS;