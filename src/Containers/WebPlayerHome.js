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
        fetch('https://jsonplaceholder.typicode.com/users')   
      .then(response=> {
          return response.json();
      })
      .then(users => {
          this.setState({  types: users })
      })
    }

    render(){
        return(
            <div > 
                <SectionList SectionTypes={HomeSectionTypes}/>
            </div>
        )
    }
}

export default WebPlayerHome;