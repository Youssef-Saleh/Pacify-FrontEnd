import React from 'react';
import {SectionCardTypes} from './SearchSectionCardTypes'
import SectionCardList from './SearchSectionCardList';
const Section = ({title}) => {
    return (
       <div className="pt5">
           <h1 className="  white" >{title}</h1>
           <SectionCardList SectionCardTypes={SectionCardTypes}/>
       </div>
        );
    }
    export default Section;