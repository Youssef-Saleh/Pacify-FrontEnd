import React from 'react';
import Card from './WebHomeCard';

const MoodCardList =({Mood}) =>{
    console.log('in moodcardlist')
    console.log({Mood})
    return(
        <div >
            { 
                Mood.map((user,i) =>{
                    return (
                        <Card 
                            key={i}
                            id={Mood[i]._id} 
                            image={Mood[i].url}
                            title={Mood[i].name}
                            text={Mood[i].description}
                        />
                    );
                })
            }
        </div>
    )
}

export default MoodCardList