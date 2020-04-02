import React from 'react';
// import logo from './logo.svg';
import './SearchPage.css';
import CardList from '../Components/SearchCardlist'
import {types} from '../Components/Searchtypes'
import Card from '../Components/SearchCard'
const SearchPage = ({id,SectionTitle,title,bg}) => {
  return (
    <div className="vh-100 dt w-100">
      <h1 className="pl3 fw7 pt4 f3 lh-title white  ">Your top genres</h1>
      <div>
        <Card 
          id={types[7].id}
          title={types[7].title}
          source={types[7].source}
          bg={types[7].bg}/>
        </div>
      <h1 className=" pl3 fw7 pt4 f3 lh-title white ">Browse all</h1>
      <CardList types={types}/>
      
    </div>
  );
}
//  f3 lh-solid white 
export default SearchPage;
