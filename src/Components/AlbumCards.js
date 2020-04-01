import React from 'react';
import './AlbumCards.css';
import './PlaylistCards.css';




const AlbumCards=({albumimage,albumname,singer}) =>{

    return (
    
        <div id="AlbumCards" className=' bg-dark-gray dib h6 br3 pa3 ma2 grow bw2'>
            <div draggable="true">
               <div id="wrapper" className="react-contextmenu-wrapper">

    
                 <img id='cardimage' alt='albumpic' src={albumimage}/>
    
                 <div id='cardtext'>
    
                     <h5  className= " pt3 fw6 f6 white">{albumname}</h5>
                     <h5  className= "fw1 f6 white">{singer}</h5>
    
                 </div>

                 <div className="boxplaylist">
                    <button className="Buttonplaylist"  aria-lable="Play">
                        <svg height="40" role="img" width="40" viewBox="0 0 80 80">
                            <polygon points="32,25 32,58 60,42" fill="currentColor"></polygon>
                        </svg>
                    </button>
                 </div>
    
               </div>
           </div>
        </div> 
            
    
        );

}
    
    export default AlbumCards;