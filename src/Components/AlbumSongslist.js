import React from 'react';
import AlbumSongsSec2 from './AlbumSongsSec2'


const AlbumSongslist=({playlistsongsdata}) => {

      return (
         
         <div>
           
            {

               playlistsongsdata.map((user,i) => {

                  return (
                  
                       
                     <AlbumSongsSec2
                    
                     // key={playlistsongsdata[i].id}
                     //  id={playlistsongsdata[i].id} 
                     //  artist={playlistsongsdata[i].artist}
                     //   album={playlistsongsdata[i].album} 
                     //   songname={playlistsongsdata[i].songname}
                       
                       key={playlistsongsdata[i].id}
                       id={playlistsongsdata[i].id} 
                       name={playlistsongsdata[i].name}
                        username={playlistsongsdata[i].username} 
                        website={playlistsongsdata[i].website}
                       
                       
                       
                       />  
         
                         );
         
                     })

   
             }                  
   
         </div>
               
         );



    }

       
       export default AlbumSongslist;