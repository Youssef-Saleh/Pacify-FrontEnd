import React from 'react';
import './SearchCard.css';
import Pages from '../Containers/SearchPages'
import{ Link} from'react-router-dom'
const Card = ({CardId,IdChange,title,source,bg,Path}) => {
    return (
    //<Link to="/Pages">  
    <div onClick={IdChange} id={bg}  className=' truncate dib br3 pa3 ma2  bw2 shadow-5 '>
              <h1 className="f3 lh-solid white ">{title}</h1>
              <div className="card">
                <img id="pod" className="db ba b--black-10 " src={source}/>
              </div>
          
       </div>
       //</Link>
      
    );
}
// src={`${source}`}
export default Card;