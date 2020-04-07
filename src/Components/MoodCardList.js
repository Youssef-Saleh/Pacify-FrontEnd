import React from 'react';
import Card from './WebHomeCard';

const MoodCardList =({Mood}) =>{
    return(
        <div >
            { 
                Mood.map((user,i) =>{
                    return (
                        <Card 
                            key={i}
                            id={Mood[i].id} 
                            image={Mood[i].image}
                            title={Mood[i].title}
                            text={Mood[i].text}
                        />
                    );
                })
            }
        </div>
    )
}

export default MoodCardList