import React from 'react'
import './HeaderBackground.css';
import SearchBox from './SearchBox';


const HeaderBackground= () =>{

    return(
        <div class='help-header'>
            <SearchBox/>
            <div className="mt5 ml7 find-account">
                <h3>Account Help</h3>
                <a>Finding accounts</a>
            </div>
        </div>
    );
}
export default HeaderBackground;