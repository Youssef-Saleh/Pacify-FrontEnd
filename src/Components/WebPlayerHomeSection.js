import React, {Component} from 'react';
import CardList from './MoodCardList';
import '../Components/WebPlayerHome.css';

const WebPlayerHomeSection = ({title,des,type}) =>{
    return(
        <div>
            <h1 className='web-h1'><a className="web-a">{title}</a></h1>
            <h4 className='web-h4'>{des}
                <a className="web-seeAll">SEE ALL</a>
            </h4>
            <CardList Mood={type}/>
        </div>
    )
}

export default WebPlayerHomeSection;