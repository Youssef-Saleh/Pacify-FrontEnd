import React from 'react';
import './SearchCard.css';
import Pages from '../Containers/SearchPages'
import{ Link} from'react-router-dom'

/**
 * @file Search card
 *
 * @module Card
 * @extends Component
 * 
 */
/**
  * @name Genre_Card
  * @property {Paramter} idc  Index of a Genre card
  * @property {Paramter} tilte Name of the type
  * @property {Paramter} source link for image of the card
  * @property {Paramter} bg name of background
  */

const Card = ({idc,title,source,bg}) => {
    return (
<Link to={`../WebFrame/Page_${idc}`} params={{id:`${idc}`}}>      
<div  id={bg}  className=' truncate dib br3 pa3 ma2  bw2 shadow-5 '>
                <h1 className="f3 lh-solid white ">{title}</h1>
                <div>
                  <img id="pod" className="db ba b--black-10 " src={source}/>
                </div>
            
      </div>
    </Link>
      
    );
}
// src={`${source}`}
export default Card;