import React from 'react'
import './FavouriteArtist.css';


const FavouriteArtistCard=({id,image,name})=>{
    return(
        <button className='unstyled-button' >
            <div className='card-design'>
                <img className='card-img' src={`${image}`}></img>
                <h3  className='card-h3' >{name}</h3>
            </div>
        </button>
    )
}

export default FavouriteArtistCard