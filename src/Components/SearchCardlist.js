import React from 'react';
import Card from './SearchCard';

const CardList = ({ types }) => {
        return (
        <div className=''>
            {
                
                // {cardCom}
                types.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            idc={types[i].id}
                            title={types[i].title}
                            source={types[i].source}
                            bg={types[i].bg}
                            Path={types[i].Path}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;
