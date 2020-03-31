import React from 'react';
import SectionCard from './SearchSectionCard';

const SectionCardList = ({ SectionCardTypes }) => {
        return (
        <div>
            {
                
                // {cardCom}
                SectionCardTypes.map((user, i) => {
                    return (
                        <SectionCard
                            key={i}
                            id={SectionCardTypes[i].id}
                            title={SectionCardTypes[i].title}
                            source={SectionCardTypes[i].source}
                            p={SectionCardTypes[i].p}
                        />
                    );
                })
            }
        </div>
    );
}
export default SectionCardList;
