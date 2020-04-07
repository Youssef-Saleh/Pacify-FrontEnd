import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AlbumInsidePage.css';
import AlbumInsideSec1 from '../Components/AlbumInsideSec1';
import AlbumSongslist from '../Components/AlbumSongslist';
 import {albumsdata} from '../Components/albumsdata';
//import {playlistsongsdata} from '../Components/playlistsongsdata';
// import ReactDOM from 'react-dom';
// var check
const $ = window.$;

class AlbumInsidePage extends Component{

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

                      <AlbumInsideSec1 

                      key= {albumsdata[1].id}
                      id={albumsdata[1].id}
                      albumimage={albumsdata[1].albumimage}
                      albumname={albumsdata[1].albumname}

                      // playlistdata1={playlistsdata1}

                      ></AlbumInsideSec1>

                   <div className="div-block-6 pt5 pr3">

                          <AlbumSongslist playlistsongsdata={playlistsongsdata}></AlbumSongslist>

                  </div>

          </div>
       </div> 
     </div>
     
    )}
};
export default AlbumInsidePage;