import React from 'react';
import './SearchPages.css'
import Section from '../Components/SearchSection'
const Pages = ({id,SectionTitle,title,bg}) => {
    return (
        <div className={bg} >
            <h2 className=" pt6 f1-ns  lh-solid white">{title}</h2>
            <Section title={SectionTitle}/>
        </div>
        );
    }
    export default Pages;