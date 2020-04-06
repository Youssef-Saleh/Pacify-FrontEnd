import React from 'react';
import PlaylistSongsSec2 from './PlaylistSongsSec2'


const PlaylistSongslist=({playlistsongsdata}) => {

      return (
         
         <div>
           
            {

               playlistsongsdata.map((user,i) => {

                  return (
                  
                       
                     <PlaylistSongsSec2
                    
                     key={playlistsongsdata[i].id}
                      ID={playlistsongsdata[i].id} 
                      artist={playlistsongsdata[i].artist}
                       album={playlistsongsdata[i].album} 
                       songname={playlistsongsdata[i].songname} />  
         
                         );
         
                     })

   
             }                  
   
         </div>
               
         );



    }

       
       export default PlaylistSongslist;