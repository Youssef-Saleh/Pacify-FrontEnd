import React from 'react';
import SectionCard from '../Components/SearchSectionCard';
const SectionCardList = ({ SectionCardTypes }) => {
    return (
    <div>
        {
            
            // {cardCom}
            SectionCardTypes.slice(0, 6).map((user, i) => {
                return (
                    <SectionCard
                        key={i}
                        id={SectionCardTypes[i].id}
                        title={SectionCardTypes[i].Title}
                        source={SectionCardTypes[i].playlistimage}
                        p={SectionCardTypes[i].Description}
                    />
                );
            })
        }
    </div>
);
}
export default SectionCardList;