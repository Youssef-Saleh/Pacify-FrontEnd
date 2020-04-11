import React from 'react';
import AlbumCards from './AlbumCards';


/**
 * @file Album Cardlist
 *
 * @module Album_Cardlist
 * @extends Component
 * 
 */

  /**
  * @name Album_Cardlist 
  * @property {Array} albumsdata provides data of an album, in the form of array of objects
  */

const AlbumCardList =({albumsdata,MusicA}) => {

    return(

        <div>
        {

            albumsdata.map((user,i) => {

                return(

               <AlbumCards
               StreamMusicA={MusicA}
               key= {albumsdata[i].id}
               id={i}
              url={albumsdata[i].url}
               name={albumsdata[i].name}
               artist={albumsdata[i].artist}    
               description={albumsdata[i].description}  
               
               />



                );


            })



        
        }



           </div>


    );
}
export default AlbumCardList;