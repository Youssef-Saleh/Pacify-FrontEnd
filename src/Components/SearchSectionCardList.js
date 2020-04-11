import React from 'react';
import SectionCard from '../Components/SearchSectionCard';
/**
 * @file in Search section cardList
 *
 * @module CardList
 * @extends Component
 * 
 */
/**
  * @name Section_Card_List
  * @property {Array} SectionCardTypes  list in search type section cards
 
  */

const SectionCardList = ({ SectionCardTypes }) => {
    return (
    <div>
        {
              
            // {cardCom}.slice(0, 5)
            SectionCardTypes.map((user, i) => {
                return (
                <SectionCard
                            key={i}
                            id={SectionCardTypes[i]._id}
                            title={SectionCardTypes[i].name}
                            source={SectionCardTypes[i].url}
                            p={SectionCardTypes[i].description}
                        />
                );
            })
        }
    </div>
);
}
export default SectionCardList;