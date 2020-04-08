import React, { Component } from 'react';
import { RouteComponentProps, matchPath } from 'react-router';
import './SearchPages.css'
import Section from '../Components/SearchSection'
import {types} from '../Components/Searchtypes'
import { match } from "react-router-dom";
import { playlistsdata } from '../Components/playlistsdata';

class Pages extends Component{
    constructor(){
        super();
        this.state={
        types:types,
        specificCard:[],
        id:""
        }
    
      }
     match =()=>{ matchPath(this.props.history.location.pathname, {
          path: '/WebFrame/Page_:id',
          exact: true,
          strict: false
        })
    }
    componentDidMount () {
        fetch('http://localhost:5000/browse ').then(response=>response.json())
        .then(properties=>{
            this.setState({
              types:properties ,
            //   clickid:types
            })
       
        fetch(`http://localhost:5000/genre/${this.state.types[this.props.match.params.id].id}`).then(response=>response.json())
        .then(card=>{
            this.setState({
                specificCard:card ,
            })
        })
     })
        console.log(this.state.types)
        console.log(Object.keys( this.state.specificCard))


        // const {idParam} = this.props.match.params.id;
        // this.setState({
        //     id: idParam                
        // })
        // // this.setState({ ID:  this.props.match.params.id })
        console.log(this.props.match.params.id)
    }
    render(){
        return (
            <div className={this.state.types[this.props.match.params.id].name} >
                <h2 className="fw7 pt6 f1-ns  lh-solid white">{this.state.types[this.props.match.params.id].name}</h2>
                    <Section title="Popular Playlists" playlist={this.state.specificCard}/>
                    {/* <Section title="New Release"playlist={playlistsdata}/> */}
            </div>
            );
    }
}

    export default Pages;