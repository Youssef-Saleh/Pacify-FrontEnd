import React from 'react';
import PlaylistCards from './PlaylistCards';


/**
 * @file Playlist Cardlist
 *
 * @module Playlist_Cardlist
 * @extends Component
 * 
 */

  /**
  * @name Playlist_Cardlist 
  * @property {Array} likedsongsdata provides data of liked songs, in the form of array of objects
  * @property {Array} playlistsdata provides data of playlist cards, in the form of array of objects
  */

const PlaylistCardList=({likedsongsdata,playlistsdata,Music}) => {

      return (
         
         <div>
            {
   
             likedsongsdata.reduce((user,i) => {

               return (

                  <PlaylistCards

                     artistL={i.artist}
                     songnameL={i.name}

                  />
 
               );

             })        

            }


            {

           

                      playlistsdata.map((user,i) => {

                        return (
                        
                           <PlaylistCards 
                           
                           StreamMusic={Music}
                           firstcard={false}
                           key={playlistsdata[i].id}
                           ID={i} 
                           url={playlistsdata[i].url}
                           name={playlistsdata[i].name} 
                           description={playlistsdata[i].description}
                  
                             
                             />  
         
                      );
         
                     })

   
             }                  
   
         </div>
               
         );



    }

       
       export default PlaylistCardList;