import React from 'react';
import PlaylistCards from './PlaylistCards';


const PlaylistCardList=({likedsongsdata,playlistsdata}) => {

      return (
         
         <div>
   
               <PlaylistCards 
               key='123'
               id='22'
               songname='Hendwan'
               artist='ABozide'
                     />  

            {

               playlistsdata.map((user,i) => {

                  return (
                  
                     <PlaylistCards firstcard={false}
                     key={playlistsdata[i].id}
                      id={playlistsdata[i].id} 
                      playlistimage={playlistsdata[i].playlistimage}
                       Title={playlistsdata[i].Title} 
                       Description={playlistsdata[i].Description} />   
         
                         );
         
                     })

   
             }                  
   
         </div>
               
         );



   //  return (
       
   //   <div>

   //      {

   //      playlistsdata.map((user,i) => {

   //       return (
         
   //          <Cards 
   //          key={playlistsdata[i].id}
   //           id={playlistsdata[i].id} 
   //           image={playlistsdata[i].image}
   //            Title={playlistsdata[i].Title} 
   //            Description={playlistsdata[i].Description} />   

   //              );

   //          })

   //      }                  

   //    </div>
           
   //     );


    
    }

       
       export default PlaylistCardList;