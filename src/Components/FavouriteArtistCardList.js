import React from 'react';
import Card from './FavouriteArtistCard';
import './FavouriteArtist.css';

const FavouriteArtistCardList =({list}) =>{
    return(
        <div >
            { 
                list.map((user,i) =>{
                    return (
                        <Card 
                            key={i}
                            id={list[i].id} 
                            image={list[i].image}
                            name={list[i].name}
                        />
                    );
                })
            }
        </div>
    )
}

export default FavouriteArtistCardList