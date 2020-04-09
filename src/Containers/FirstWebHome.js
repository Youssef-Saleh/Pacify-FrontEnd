import React, {Component} from 'react';
import { Artists } from '../Components/Artists';
import CardList from '../Components/FavouriteArtistCardList';
import './FirstWebHome.css';

class FirstWebHome extends Component{
    constructor(props){
        super(props)
        this.state={
           list: Artists,
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(){
    //     this.setState({
    //       button:!this.state.button
    //     })
    //   }
    render(){
        return(
            <div className='first-home'> 
                <h1 className='first-h1'> Choose 3 or more artists you like. </h1>
                <CardList list={Artists}></CardList>
                {/* <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>
                    
                </button> */}
                
            </div>
        )
    }
}

export default FirstWebHome