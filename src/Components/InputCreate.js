import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal';
import './InputCreate.css';
import HeartIcon from "./HeartIcon"
import ReactDOM from 'react-dom';
var check
const $ = window.$;

 class InputCreate extends Component{
    constructor(props){
    super(props)
    this.state={
        data:[],
        checked:true,
        MockBack: false,
        LoggedIn: false
    }}
    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.data)
    }

    onSubmit(e) {
       
        console.log( this.refs.ayhaga.value);
        console.log(sessionStorage.getItem('token'))
        // etc
        const requestOptions = {
            method: 'POST',
            headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json',
            'authorization':sessionStorage.getItem('token'),},
            body: new URLSearchParams({
            'name':this.refs.ayhaga.value,
        
                })
        };
        console.log(requestOptions.body)
                fetch('http://localhost:5000/createPlaylist', requestOptions)
                .then(console.log("fetching successfuly"))
                .then(response => {
                    return response.json()
                    console.log(response)
                })
        
    }

      
   // componentDidMount(){

//const requestOptions={

  //  body:{
    //    'name':
    //}
//}

  //  }
 render(){
    return(
        
        <div>
        <h1 className="heading-48">Create a new playlist</h1><div className="div-block-16">
        <div className="_7c0399398b8b07b1b1fa6764a3ed59b1-scss" id="text-box">
        <div className="inputBox"><div class="contentSpacing">
        <h4 className="inputBox-label">Playlist Name</h4>
        <input type="text" className="inputBox-input" id='input-holder' placeholder="New Playlist" name="newplaylist" ref="ayhaga" />
        <button className="create" type="button" onClick={this.onSubmit.bind(this)}>CREATE</button>
        </div></div></div></div></div>
        
          
     
    )
 };
 }
export default InputCreate;