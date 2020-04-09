import React, {Component} from 'react';
import Section from '../Components/WebPlayerHomeSection';
// import '../Components/WebPlayerHome.css';

const WebPlayerHomeSectionList = ({SectionTypes}) =>{
    console.log('section list in sectionlist ')
    console.log({SectionTypes})
    return (
        <div>
            {
                SectionTypes.map((user,i) =>{
                    return(
                        <Section 
                            key={i}
                            // id={SectionTypes[i].id}
                            title={SectionTypes[i].title}
                            // des={SectionTypes[i].des}
                            type={SectionTypes[i].data}
                        />
                    );
                })
            }
        </div>
    )
}
export default  WebPlayerHomeSectionList;