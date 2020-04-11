import React from 'react';
import Card from './SearchCard';
import {types} from '../Components/Searchtypes'

/**
 * @file Search cardList
 *
 * @module CardList
 * @extends Component
 * 
 */
/**
  * @name Genre_CardList
  * @property {Paramter} list  list of search cards
 
  */
const CardList = ({ list }) => {
        return (
        <div>
            {
                
                // {cardCom}
                list.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            idc={i}
                            title={list[i].name}
                            // source={types[i].source}
                            bg={list[i].name}
                            // Path={types[i].Path}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;
