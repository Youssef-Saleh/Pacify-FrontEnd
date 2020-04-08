import React from 'react';
import PlaylistCards from './PlaylistCards';


const PlaylistCardList=({likedsongsdata,playlistsdata,likedPlaylists,Music}) => {

      return (
         
         <div>
            {
   
             likedsongsdata.reduce((user,i) => {

               return (

                  <PlaylistCards

                     artist={i.artist}
                     songname={i.songname}

                  />
 
               );

             })        

            }


            {

              

               // Object.keys(playlistsdata.likedPlaylists).map((user,i) => {

               //    return (
                  
               //       <PlaylistCards 
                     
               //       StreamMusic={Music}
               //       firstcard={false}
               //       key={playlistsdata.likedPlaylists[i].id}
               //        ID={playlistsdata.likedPlaylists[i].id} 
               //        url={playlistsdata.likedPlaylists[i].url}
               //        name={playlistsdata.likedPlaylists[i].name} 
               //        description={playlistsdata.likedPlaylists[i].description}
                     
                       
               //         />  

                      playlistsdata.map((user,i) => {

                        return (
                        
                           <PlaylistCards 
                           
                           StreamMusic={Music}
                           firstcard={false}
                           key={playlistsdata[i].id}
                            ID={playlistsdata[i].id} 
                            playlistimage={playlistsdata[i].playlistimage}
                            Title={playlistsdata[i].Title} 
                            Description={playlistsdata[i].Description}
                           
                             
                             />  








         
                         );
         
                     })

   
             }                  
   
         </div>
               
         );



    }

       
       export default PlaylistCardList;