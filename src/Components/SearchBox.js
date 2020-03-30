import React from 'react'
import './SearchBox.css';
import {div,input} from 'react-bootstrap'

const SearchBox = () =>{

    return(
        <div className="front-search front-box">
        <div className="container">
        <div className="row">
      <div class="tc col-xs12 col-md-8 col-md-offset-2" >
                
                
                <div class="search-container">
                    <div class="search-box">
                        <input type="text" class="form-control" id="search" placeholder="Search" autocomplete="off"/>
                        </div>
                        
 </div>
 </div>
 </div>
 </div>
 </div>
 



    );
}
export default SearchBox;