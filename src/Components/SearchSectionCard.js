import React from 'react';
import './SearchSectionCard.css'
const SectionCard = ({title,source,p}) => {
    return (
       <div id="Section" className=" vh-100 w-100 dt dib br3 pa3 ma2  bw2 shadow-5">
          <div draggable="true">
              <div id="two" className="react-contextmenu-wrapper">
                <div  className="pa1">
                    <img className="tc db ba b--black-10 "src={source}/>
                </div>
                <div>
                    <h4 className="white">{title}</h4>
                    <p className="light-gray f6 ">{p}</p>
                </div>
                <div className="box ">
                    <button className="Button "  aria-lable="Play">
                        <svg height="50" role="img" width="50" viewBox="0 0 80 80">
                            <polygon points="32,25 32,58 60,42" fill="currentColor"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
          </div>
       </div>
        );
    }
    // 21.57 12.98 3 5.98 21 21.57 12
    export default SectionCard;