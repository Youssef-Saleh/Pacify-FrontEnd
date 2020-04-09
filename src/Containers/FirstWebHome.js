import React, {Component} from 'react';
import { Artists } from '../Components/Artists';
import CardList from '../Components/FavouriteArtistCardList';
import './FirstWebHome.css';

class FirstWebHome extends Component{
    constructor(props){
        super(props)
        this.state={
           list:[],
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(){
    //     this.setState({
    //       button:!this.state.button
    //     })
    //   }
    componentDidMount(){
        console.log(sessionStorage.getItem('token'))
        const requestOptions = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json',
            'authorization' : sessionStorage.getItem('token')}
        };
        fetch('http://localhost:5000/select/artists', requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then((users)=>{
            this.setState({list:users.Artists})
            console.log(users)
        });
    }
    render(){
        return(
            <div className='first-home'> 
                <h1 className='first-h1'> Choose 3 or more artists you like. </h1>
                <CardList list={this.state.list}></CardList>
                {/* <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>
                    
                </button> */}
                
            </div>
        )
    }
}

export default FirstWebHome