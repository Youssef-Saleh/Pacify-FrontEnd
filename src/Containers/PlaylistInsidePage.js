import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteComponentProps, matchPath } from 'react-router';
import './PlaylistInsidePage.css';
import PlaylistInsideSec1 from '../Components/PlaylistInsideSec1';
import PlaylistSongslist from '../Components/PlaylistSongslist';
 //import {playlistsdata} from '../Components/playlistsdata';
//import {playlistsongsdata} from '../Components/playlistsongsdata';
// import ReactDOM from 'react-dom';
// var check
const $ = window.$;

class PlaylistInsidePage extends Component{

  constructor(props) {        
    super(props)
    this.state= {

     playlistdescription: [], 
      playlistsongsdata:[],  
      name:'',
      url:'',

     
       }
}


match =()=>{ matchPath(this.props.history.location.pathname, {
  path: '/WebFrame/PlaylistInsidePage_:id',
  exact: true,
  strict: false
})
}

componentDidMount(){
var valueArray=[];


const requestOptions = {
  method: 'GET',
  headers: { 
  'Content-Type': 'application/x-www-form-urlencoded',  
  'authorization': sessionStorage.getItem('token'),
  'Accept': 'application/json'},
  }

  fetch('http://localhost:5000/likedPlaylists ',requestOptions)
  .then(res => res.json())
  .then(function(res) {
      res.forEach(element => {
          valueArray.push(element);
});
})

.then( this.setState({playlistdescription:valueArray}))
.then(()=>this.setState({name:this.state.playlistdescription[this.props.match.params.id].name}))
.then(()=>this.setState({url:this.state.playlistdescription[this.props.match.params.id].url}))
.then(()=>this.fetching(this.state.playlistdescription))


}

fetching=(value)=>{

  const requestOptions = {
      method: 'GET',
      headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',  
      'authorization': sessionStorage.getItem('token'),
      'Accept': 'application/json'},
      }

  fetch(`http://localhost:5000/playlist/${value[this.props.match.params.id]._id}`,requestOptions)
  .then(response=>response.json())
  .then(songs=> 
      this.setState({playlistsongsdata:songs}));

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

    return(

      

      <div className="content1 vh-100 dt w-100">
        <div className="div-block-15">
          <div className="w-layout-grid grid">

                      <PlaylistInsideSec1 

                      // key= {playlistsdata[ this.props.match.params.id-1].id}
                      // id={playlistsdata[ this.props.match.params.id-1].id}
                      // playlistimage={playlistsdata[ this.props.match.params.id-1].playlistimage}
                      name={this.state.name}
                      url={this.state.url}
                   

                      ></PlaylistInsideSec1>

                   <div className="div-block-6 pt5 pr3">

                          <PlaylistSongslist playlistsongsdata={this.state.playlistsongsdata}></PlaylistSongslist>

                  </div>

          </div>
       </div> 
     </div>
     
    )}
};
export default PlaylistInsidePage;