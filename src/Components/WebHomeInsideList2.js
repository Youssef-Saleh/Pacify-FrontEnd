import React from 'react';
import WebHomeInsideList from './WebHomeInsideList'

/**
 * @file WebHomeInsideList2
 *
 * The Component is just a list of songs that appears at right when the user clicks on the Web Player Home Cards
 * @module WebHomeInsideList2
 * @extends Component
 * 
 */
const WebHomeInsideList2=({WebHomeInsideData}) => {

    return (
        <div>
            {
                WebHomeInsideData.map((user,i) => {
                    return (
                        <WebHomeInsideList
                            key={WebHomeInsideData[i].id}
                            id={WebHomeInsideData[i].id} 
                            name={WebHomeInsideData[i].name}
                            username={WebHomeInsideData[i].username} 
                            website={WebHomeInsideData[i].website}
                        />  
                    );
            
                })
            }                  
        </div>       
    );
}
export default  WebHomeInsideList2;