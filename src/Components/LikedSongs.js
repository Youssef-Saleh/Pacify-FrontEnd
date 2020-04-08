import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LikedSongs.css';
import HeartIcon from "./HeartIcon"
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
  fetch('http://localhost:5000/likedSongs').then(response=>{
    return response.json();
  }).then(users=>{
    this.setState({songs:users});
  });

}


    render(){
     
      const CardList = () => {
        console.log(this.state.songs)
        const Cards = this.state.songs.map((user,i)=>{
           return <Song name={this.state.songs[i].name} length={this.state.songs[i].genre} link={this.state.songs[i].url}/>})
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
      <img src="https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png" alt="" class="image-3" id="liked-songs"/>
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