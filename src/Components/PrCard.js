import React from 'react'
import './PrCard.css'

const Card=({Image,Feature,Result})=>{
    return(
        <div id='card' className='tc dib  pa3 ma2  '>
            <img id='pr-img' src={`${Image}`}></img>
            <h3 className='b mt5'>{Feature}</h3>
            <p className='tc'>{Result}</p>
        </div>
    )
}

export default Card