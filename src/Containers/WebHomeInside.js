import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteComponentProps, matchPath } from 'react-router';
import './WebHomeInside.css';
import WebHomeInsideCard from '../Components/WebHomeInsideCard';
import WebHomeInsideList2 from '../Components/WebHomeInsideList2';
import {playlistsdata} from '../Components/playlistsdata';

const $ = window.$;

class WebHomeInside extends Component{
  constructor(props) {        
    super(props)
    this.state= { 
      WebHomeInsideSongs:[],  
    }
}

match =()=>{ matchPath(this.props.history.location.pathname, {
    path: '/WebFrame/WebHomeInside_:id',
    exact: true,
    strict: false
    })
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> {
        return response.json();
    })
    .then(users => {
        this.setState({ WebHomeInsideSongs: users })
    })
}

toggle=(event)=>{
    var x= document.getElementById("play")
    x.style.display="block"
    var y=document.getElementById("music")
    y.style.display="none"
}
revert=()=>{
    var x= document.getElementById("music")
    x.style.display="block"
    var y=document.getElementById("play")
    y.style.display="none"
}

    render(){
        const {WebHomeInsideSongs} =this.state
        return(
            <div className="content1">
                <div className="div-block-15">
                    <div className="w-layout-grid grid">
                        <WebHomeInsideCard 
                            key= {playlistsdata[ this.props.match.params.id-1].id}
                            id={playlistsdata[ this.props.match.params.id-1].id}
                            playlistimage={playlistsdata[ this.props.match.params.id-1].playlistimage}
                            Title={playlistsdata[ this.props.match.params.id-1].Title}
                        ></WebHomeInsideCard>
                        <div className="div-block-6 pt5 pr3">
                            <WebHomeInsideList2 WebHomeInsideData={WebHomeInsideSongs}></WebHomeInsideList2>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
};
export default WebHomeInside;