import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AlbumInsidePage.css';
import { RouteComponentProps, matchPath } from 'react-router';
import AlbumInsideSec1 from '../Components/AlbumInsideSec1';
import AlbumSongslist from '../Components/AlbumSongslist';
 //import {albumsdata} from '../Components/albumsdata';
import {playlistsongsdata} from '../Components/playlistsongsdata';
// import ReactDOM from 'react-dom';
// var check
const $ = window.$;

class AlbumInsidePage extends Component{

  constructor(props) {        
    super(props)
    this.state= {

      albumsdata: [], 
      playlistsongsdata:playlistsongsdata,  
     
       }
}

match =()=>{ matchPath(this.props.history.location.pathname, {
  path: '/WebFrame/AlbumInsidePage_:ID',
  exact: true,
  strict: false
})
}

componentDidMount(){


  fetch('http://localhost:5000/likedAlbums')   

.then(response=> {

    return response.json();
})
.then(users => {

    //this.setState({  playlistsdata1: users })
    // this.setState({  playlistsongsdata: users })
    this.setState({  albumsdata: users })

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

      const {albumsdata,playlistsongsdata} =this.state
    return(

      

      <div className="content1">
        <div className="div-block-15">
          <div className="w-layout-grid grid">

                      <AlbumInsideSec1 

                      key= {albumsdata[ this.props.match.params.ID].id}
                      ID={albumsdata[ this.props.match.params.ID].id}
                     url={albumsdata[ this.props.match.params.ID].url}
                      name={albumsdata[ this.props.match.params.ID].name}

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