import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LikedSongs.css';
import Song from './Song'
import ReactDOM from 'react-dom';
var check
const $ = window.$;



class LikedSongs extends Component{
toggle=(event)=>{

    console.log("blabla")
}
revert=()=>{
    var x= document.getElementById("music")
    x.style.display="block"
    var y=document.getElementById("play")
    y.style.display="none"
}
UpdateStatus(event){

  console.log("ayhaga")
}
constructor(){

super()
this.state={

  songs:[]
}


}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    return response.json();
  }).then(users=>{
    this.setState({songs:users});
  });

}


    render(){
      const CardList = () => {
        const Cards = this.state.songs.map((user,i)=>{
           return <Song name={this.state.songs[i].username} length={this.state.songs[i].id}/>})
        return (
            <div>
                {Cards}
            </div>
        )
        
    }
      
    return(
        <div className="content">
      <div className="div-block-15">
      <div className="w-layout-grid grid">
      <div className="div-block-7">
      <div>
      <img src="https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png" alt="" class="image-3"/>
      <div className="playlist-name">Liked Songs</div>
      <div className="playlist-creator">Iain Freestone</div>
      <div className="play-container">
           <button className="create" type="button" onClick={this.toggle.bind(this)}>Play</button>
           </div>
      <div className="playlist-description w-dyn-bind-empty"></div>
      <div className="playlist-number-of-songs">25 Songs</div>
      <div className="div-block-9"><img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b807c077bbfd2ec9272_heart.png" alt="" className="image-5"/>
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png" alt=""/></div></div></div>
      <div className="div-block-6">
      <div className="w-dyn-list">
      <div className="w-dyn-items">
      <CardList></CardList>
      </div></div></div></div></div></div>
     
    )}
};
export default LikedSongs;