import React from 'react';
import SectionCard from '../Components/SearchSectionCard';
const SectionCardList = ({ SectionCardTypes }) => {
    return (
    <div>
        {
            
            // {cardCom}.slice(0, 5)
            SectionCardTypes.map((c, i) => {
                return (<div>
                    {
                        c.playlists.map((user,j)=>
                        <SectionCard
                            key={i}
                            id={user[j]._id}
                            title={user[j].name}
                            // source={SectionCardTypes[i].playlistimage}
                            p={SectionCardTypes[i].Description}
                        />
                        )}
                        </div>
                );
            })
        }
    </div>
);
}
export default SectionCardList;