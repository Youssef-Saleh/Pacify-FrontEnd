import React from 'react';
// import logo from './logo.svg';
import './SearchPage.css';
import CardList from '../Components/SearchCardlist'
import {types} from '../Components/Searchtypes'
import Card from '../Components/SearchCard'
const SearchPage = ({id,SectionTitle,title,bg}) => {
  return (
    <div className="App">
      <h1 className="f2.5 lh-solid white ">Your top genres</h1>
      <div>
        <Card 
          id={types[7].id}
          title={types[7].title}
          source={types[7].source}
          bg={types[7].bg}/>
        </div>
      <h1 className="f2.5 lh-solid white ">Browse all</h1>
      <CardList types={types}/>
      on
    </div>
  );
}

export default SearchPage;
