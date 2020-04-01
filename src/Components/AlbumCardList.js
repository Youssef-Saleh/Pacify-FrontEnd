import React from 'react';
import AlbumCards from './AlbumCards';


const AlbumCardList =({albumsdata}) => {

    return(

        <div>
        {

            albumsdata.map((user,i) => {

                return(

               <AlbumCards
                
               key= {albumsdata[i].id}
               id={albumsdata[i].id}
               albumimage={albumsdata[i].albumimage}
               albumname={albumsdata[i].albumname}
               singer={albumsdata[i].singer}     
               
               />



                );


            })



        
        }



           </div>


    );
}
export default AlbumCardList;