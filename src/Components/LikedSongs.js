import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LikedSongs.css';
import ReactDOM from 'react-dom';
var check
const $ = window.$;

class CreatePlaylist extends Component{
toggle=(event)=>{

    var x= document.getElementById("play")
    x.style.display="block"
    var y=document.getElementById("music")
    y.style.display="none"
}
revert=()=>{
    var x= document.getElementById("music")
    x.style.display="block"
    var y=document.getElementById("play")
    y.style.display="none"
}
    render(){
    return(
        <div className="content">
      <div className="div-block-15">
      <div className="w-layout-grid grid">
      <div className="div-block-7">
      <div>
      <img src="https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png" alt="" class="image-3"/>
      <div className="playlist-name">Liked Songs</div>
      <div className="playlist-creator">Iain Freestone</div>
      <div className="play-container">
           <button className="create" type="button">Play</button>
           </div>
      <div className="playlist-description w-dyn-bind-empty"></div>
      <div className="playlist-number-of-songs">25 Songs</div>
      <div className="div-block-9"><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b807c077bbfd2ec9272_heart.png" alt="" className="image-5"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png" alt=""/></div></div></div>
      <div className="div-block-6">
      <div className="w-dyn-list">
      <div className="w-dyn-items">
      <div className="w-dyn-item" >
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5"><div>
        <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"   alt="" className="image-2" id="play"/>
        <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" id="music"/></div>
      <div>
      <div className="song-name">A Horse With No Name</div>
      <div className="song-name-and-artist">
      <div>America</div><div> - 
      </div><div>America</div></div></div></div><div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>4:12</div>
      </div></div>
      </div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song" >
      <div className="div-block-5">
      <div><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2" id="play"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" className="image-9" id="music"/>
      </div><div><div className="song-name">American Girl</div>
      <div className="song-name-and-artist">
      <div>Tom Petty &amp; The Heartbreakers</div>
      <div> - </div><div>Tom Petty &amp; The Heartbreakers</div></div></div></div><div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png" alt="" class="image-6"/>
      <div>3:34</div></div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5">
      <div><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" /></div>
      <div>
      <div className="song-name">Doctor My Eyes</div>
      <div className="song-name-and-artist">
      <div>Jackson Browne</div>
      <div> - </div>
      <div>Jackson Browne (Saturate Before Using)</div>
      </div>
      </div>
      </div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>3:19</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div class="div-block-5">
      <div><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" />
      </div><div>
      <div className="song-name">Fire and Rain</div>
      <div className="song-name-and-artist">
      <div>James Taylor</div>
      <div> - </div>
      <div>Sweet Baby James</div>
      </div></div>
      </div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>3:20</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" class="song">
      <div class="div-block-5">
      <div><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"   alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" />
      </div><div>
      <div className="song-name">I Can't Make You Love Me</div>
      <div className="song-name-and-artist">
      <div>Bonnie Raitt</div>
      <div> - </div>
      <div>Luck Of The Draw</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"   alt="" className="image-6"/>
      <div>5:32</div>
      </div>
      </div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5">
      <div><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png" alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" />
      </div><div>
      <div className="song-name">Jack &amp; Diane</div>
      <div className="song-name-and-artist">
      <div>John Mellencamp</div>
      <div> - </div>
      <div>American Fool</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>3:14</div>
      </div></div>
      </div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div class="div-block-5">
      <div><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" />
      </div><div><div className="song-name">Lido Shuffle</div>
      <div className="song-name-and-artist">
      <div>Boz Scraggs</div>
      <div> - </div>
      <div>Silk Degrees</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>3:41</div>
      </div>
      </div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5">
      <div><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" />
      </div>
      <div>
      <div className="song-name">Listen To The Music</div>
      <div className="song-name-and-artist">
      <div>The Doobie Brothers</div>
      <div> - </div>
      <div>Toulouse Street</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>3:47</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5">
      <div>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" />
      </div><div>
      <div className="song-name">Long Cool Woman (In A Black Dress) - 1999 Remaster</div>
      <div class="song-name-and-artist">
      <div>The Hollies</div>
      <div> - </div>
      <div>Distant Light</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>3:19</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5"><div>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" />
      </div><div>
      <div className="song-name">Meet Me Half Way - From "Over The Top" Soundtrack</div>
      <div className="song-name-and-artist">
      <div>Kenny Loggins</div>
      <div> - </div>
      <div>Back To Avalon</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>3:39</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5"><div>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9"/>
      </div><div>
      <div className="song-name">Reminiscing - Remastered</div>
      <div class="song-name-and-artist">
      <div>Little River Band</div>
      <div> - </div>
      <div>Sleeper Catcher (Remastered)</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>4:15</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div class="div-block-5"><div>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9"/>
      </div><div>
      <div className="song-name">Suite: Judy Blue Eyes - Remastered</div>
      <div className="song-name-and-artist">
      <div>Crosby, Stills &amp; Nash</div>
      <div> - </div>
      <div>Crosby, Stills &amp; Nash [with Bonus Tracks]</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png" alt="" class="image-6"/>
      <div>7:24</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div class="div-block-5"><div>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9"/>
      </div><div>
      <div className="song-name">The Boys Of Summer</div>
      <div className="song-name-and-artist">
      <div>Don Henly</div>
      <div> - </div>
      <div>Building The Perfect Beast</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" className="image-6"/>
      <div>4:48</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5"><div>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9"/>
      </div><div>
      <div className="song-name">Valerie</div>
      <div class="song-name-and-artist">
      <div>Steve Winwood</div>
      <div> - </div>
      <div>Talking Back To The NIght</div></div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>4:06</div>
      </div></div></div>
      <div className="w-dyn-item">
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5">
      <div>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"  alt="" class="image-2"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9"/>
      </div><div>
      <div className="song-name">You're So Vain</div>
      <div className="song-name-and-artist">
      <div>Carly Simon</div>
      <div> - </div>
      <div>No Secrets</div>
      </div></div></div>
      <div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png" alt="" class="image-6"/>
      <div>4:19</div></div></div></div></div></div></div></div></div> 
      </div>
     
    )}
};
export default CreatePlaylist;