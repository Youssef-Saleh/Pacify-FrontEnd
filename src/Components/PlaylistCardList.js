import React from 'react';
import PlaylistCards from './PlaylistCards';


const PlaylistCardList=({likedsongsdata,playlistsdata,Music}) => {

      return (
         
         <div>
            {
   
             likedsongsdata.reduce((user,i) => {

               // console.log(i.name)
               // console.log(i.email)
               return (


                  <PlaylistCards

                     artist={i.artist}
                     songname={i.songname}

                  />
 
                  // <PlaylistCards

                  //    name={i.name}
                  //    email={i.email}

                  // />
               );

             })

            

            }


            {

               playlistsdata.map((user,i) => {

                  return (
                  
                     // <PlaylistCards firstcard={false}
                     // key={playlistsdata[i].id}
                     //  id={playlistsdata[i].id} 
                     //  playlistimage={playlistsdata[i].playlistimage}
                     //   Title={playlistsdata[i].Title} 
                     //   Description={playlistsdata[i].Description} />  
                       
                       
                       
                     <PlaylistCards
                      
                     StreamMusic={Music}
                     firstcard={false}
                     key={playlistsdata[i].id}
                      ID={playlistsdata[i].id} 
                      playlistimage={playlistsdata[i].playlistimage}
                       name={playlistsdata[i].name} 
                       email={playlistsdata[i].email} />  
         
                         );
         
                     })

   
             }                  
   
         </div>
               
         );



    }

       
       export default PlaylistCardList;