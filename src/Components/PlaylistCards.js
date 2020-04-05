import React from 'react';
import './PlaylistCards.css'
//import { Title } from 'react-bootstrap/lib/Modal';



//  const Playmusic =({playlistdata}) =>{
    
//         console.log("playyy")
//         console.log(playlistdata)
//     }

const PlaylistCards=({firstcard=true,id,ID, artist,StreamMusic, songname,playlistimage,name,email}) =>{



    if(firstcard === true){

    return (
        
<div  id="firstcard" className=' dtc dib h-6 w-40 br3 pa3 pt4 ma2 grow bw2'>

      <div draggable="true">
          <div id="wrapper" className="react-contextmenu-wrapper">

            <div className="  ma4 mt5 pb2 " id="cardtext2">

                <h5 className= "f5 lh-copy white">{artist}<span className=' pl1 fw3'>{songname}</span></h5>
                <h5 className="f2 fw7 lh-title white "> Liked Songs</h5>
                <h5 className= "f5  lh-copy white "> 10 Liked Songs</h5>

            </div>

                
             <div className="box2playlist">
                <button className="Button2playlist" aria-lable="Play">
                    <svg height="50" role="img" width="60" viewBox="0 0 80 80">
                        <polygon points="32,25 32,58 60,42" fill="currentColor"></polygon>
                    </svg>
                </button>
            </div>
      
   </div>
      </div>
          </div>
    
    );
    }

 return (
    
    <div id="Cards"  className='dtc bg-dark-gray dib br3 pa3 ma2 grow bw2'>
       <div   draggable="true">
          <div id="wrapper" className="react-contextmenu-wrapper">

             <img id='cardimage' alt='pic' src={playlistimage}/>

             <div   id='cardtext'>

                 <h5  className= " pt3 fw6 f6 white">{name}</h5>
                 <h5  className= "fw1 f6 white">{email}</h5>

             </div>
        
             <div   className="boxplaylist">

                    <button 
                    className="Buttonplaylist" aria-lable="Play"
                    onClick={StreamMusic} IDM= {ID}
                    >
                    <svg  onClick={StreamMusic} IDM= {ID} height="40" role="img" width="40" viewBox="0 0 80 80">
                        <polygon  points="32,25 32,58 60,42" fill="currentColor"></polygon>
                    </svg>
                </button>
            </div>
      
         </div>

        </div>
    </div>


        

    );

}
    
    export default PlaylistCards;