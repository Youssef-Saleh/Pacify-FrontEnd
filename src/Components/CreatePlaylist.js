import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal';
import './CreatePlaylist.css';
import ReactDOM from 'react-dom';
var check
const $ = window.$;

const CreatePlaylist = (props) => { 








    
    return(
        
        <div classname="wrap" id="Contain">
        <Modal show={props.modalOpen} onHide={props.handleModalOpen}  dialogClassName="custom-modal" >
        
        <div className="create-playlist active" id="popup">
        <div class="new-playlist" id='Container' >
         <div className="Close">
        <button className="close-icon" type="button"  >
        
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd">

        </path></svg></button>
        
        </div>
        <h1 className="heading-48">Create a new playlist</h1><div className="div-block-16">
        <div className="_7c0399398b8b07b1b1fa6764a3ed59b1-scss">
        <div className="inputBox"><div class="contentSpacing">
        <h4 className="inputBox-label">Playlist Name</h4>
        <input type="text" className="inputBox-input" id='input-holder' placeholder="New Playlist" />
        </div></div></div></div>
        <div className="button-container">
           <div className="cancel-button">
           <button className="Cancel" type="button"  >CANCEL</button>
           </div>
           <div className="create-button">
           <button className="create" type="button">CREATE</button>
           </div>
           </div>
        </div>
           
           </div>
           
           </Modal>
           </div>
          
     
    )
};
export default CreatePlaylist;