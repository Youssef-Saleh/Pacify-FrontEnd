import React from 'react';
import AlbumCards from './AlbumCards';


const AlbumCardList =({albumsdata,MusicA}) => {

    return(

        <div>
        {

            albumsdata.map((user,i) => {

                return(

               <AlbumCards
               StreamMusicA={MusicA}
               key= {albumsdata[i].id}
               ID={albumsdata[i].id}
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