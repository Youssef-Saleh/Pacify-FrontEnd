import React from 'react';
import apple from '../apple.PNG';
import googlepaly from '../googleplay.PNG';
import microsoft from '../microsoft.PNG';
import './Section2.css'


const Section2 =() => {



    return (
      <div className="section2">
          <h2 className="fw8 lh-copy" id="headersection2">Bring your music to mobile and tablet, too.</h2>
          <p id="parag2">Listening on your phone or tablet is free, easy, and fun.</p>
          <div className="images2" id="images2">
            <a href="https://apps.apple.com/app/spotify-music/id324684580"><img id="apple2" src={apple} alt="logo" /> </a>
            <a href="https://play.google.com/store/apps/details?id=com.spotify.music " ><img id="google2" src={googlepaly} alt="logo" /> </a>
            <a href="https://www.microsoft.com/en-eg/p/spotify-music/9ncbcszsjrsb?cid=spotifyweb-windows10-store-direct&rtc=1" ><img id="microsoft2" src={microsoft} alt="logo" /> </a>
          </div>
      </div>
    );



}

export default Section2