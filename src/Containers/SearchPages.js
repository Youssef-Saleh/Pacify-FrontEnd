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
        const {idParam} = this.props.match.params.id;
        this.setState({
            id: idParam                
        })
        // this.setState({ ID:  this.props.match.params.id })
        console.log(this.state.id)
    }
    render(){
        return (
            <div className={this.state.types[this.props.match.params.id-1].bg} >
                <h2 className="fw7 pt6 f1-ns  lh-solid white">{this.state.types[this.props.match.params.id-1].title}</h2>
                    <Section title="Popular Playlists" playlist={playlistsdata}/>
                    <Section title="New Release"playlist={playlistsdata}/>
            </div>
            );
    }
}

    export default Pages;