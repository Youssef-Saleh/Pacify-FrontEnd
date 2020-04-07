import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlaylistInsidePage.css';
import PlaylistInsideSec1 from '../Components/PlaylistInsideSec1';
import PlaylistSongslist from '../Components/PlaylistSongslist';
 import {playlistsdata} from '../Components/playlistsdata';
//import {playlistsongsdata} from '../Components/playlistsongsdata';
// import ReactDOM from 'react-dom';
// var check
const $ = window.$;

class PlaylistInsidePage extends Component{

  constructor(props) {        
    super(props)
    this.state= {

     // playlistsdata1: [], 
      playlistsongsdata:[],  
     
       }
}

componentDidMount(){


  fetch('https://jsonplaceholder.typicode.com/users')
     


.then(response=> {

    return response.json();
})
.then(users => {

    //this.setState({  playlistsdata1: users })
    this.setState({  playlistsongsdata: users })
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

      const {playlistsdata1,playlistsongsdata} =this.state
    return(

      

      <div className="content1">
        <div className="div-block-15">
          <div className="w-layout-grid grid">

                      <PlaylistInsideSec1 

                      key= {playlistsdata[1].id}
                      id={playlistsdata[1].id}
                      playlistimage={playlistsdata[1].playlistimage}
                      Title={playlistsdata[1].Title}

                      // playlistdata1={playlistsdata1}

                      ></PlaylistInsideSec1>

                   <div className="div-block-6 pt5 pr3">

                          <PlaylistSongslist playlistsongsdata={playlistsongsdata}></PlaylistSongslist>

                  </div>

          </div>
       </div> 
     </div>
     
    )}
};
export default PlaylistInsidePage;