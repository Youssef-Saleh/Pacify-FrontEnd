import React from 'react';
import Card from './SearchCard';
import {types} from '../Components/Searchtypes'

const CardList = ({ list }) => {
        return (
        <div>
            {
                
                // {cardCom}
                list.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            idc={list[i].id}
                            title={list[i].name}
                            // source={types[i].source}
                            // bg={types[i].bg}
                            // Path={types[i].Path}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;
