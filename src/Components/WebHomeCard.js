import React from 'react';
import './WebHomeCard.css'
import Play from '../play.png'
import Library from '../WebHomeLibrary.png'
import Copy from '../copyLink.png'
import Radio from '../radio2.png'
import Desktop from '../desktop.png'
const Card = ({id,image,title,text}) =>{
    return(
        <div class="card__collection clear-fix">
            <div class="cards cards--three">
                <img src={`${image}`} class="img-responsive" alt=""></img>
                <span class="cards--three__rect-1">
                    <span class="shadow-1"></span>
                    <p class="title-p">{title}</p>
                    <p class="text-p">{text}</p>
                </span>
                <span class="cards--three__circle"></span>
                <ul class="cards--three__list">
                    <li> <a href="#"><img className="Radio-img" src={Radio} alt="Play Icon"></img></a></li>
                    <li><a href="#"><img className="Copy-img" src={Copy} alt="Play Icon"></img></a></li>
                    <li><a href="#"><img className="Library-img" src={ Library} alt="Play Icon"></img></a></li>
                    <br></br>
                    <li><a href="#"><img className="Desktop-img" src={Desktop} alt="Play Icon"></img></a></li>
                    <li><a href="#"><img className="Play-img" src={Play} alt="Play Icon"></img></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Card;