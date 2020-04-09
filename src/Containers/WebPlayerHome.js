import React, {Component} from 'react';
import { HomeSectionTypes } from '../Components/HomeSectionTypes';
import SectionList from '../Components/WebPlayerHomeSectionList';
import './WebPlayerHome.css';

class WebPlayerHome extends Component{
    constructor(){
        super()
        this.state={
            types: []
        }
    }
    componentDidMount(){
        console.log(sessionStorage.getItem('token'))
        const requestOptions = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json',
            'authorization' : sessionStorage.getItem('token')}
        };
        fetch('http://localhost:5000/home', requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then((users)=>{
            this.setState({types:users})
            console.log(users)
        });
        
    }
    render(){
        console.log('section list is home')
        return(
            <div > 
                <SectionList SectionTypes={this.state.types}/>
            </div>
        )
        console.log('returned to home');
    }
}

export default WebPlayerHome;