import React from 'react'
import WebPlayer from '../Components/WebPlayer'
import SideBar from '../Components/SideBar'
import WebNav from '../Components/WebNav'
import './WebFrame.css'
import SearchPage from './SearchPage'
import CreatePlaylist from '../Components/CreatePlaylist'
import PlayList from '../Containers/Playlist'
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
const WebFrame = ()=>{
    return (
        <div>
        
            <SideBar></SideBar>
            <CreatePlaylist></CreatePlaylist>
            <WebNav></WebNav>
            
            <div className='web-frame '>    {/*The Content of the page is placed here,,routing also will be here*/ }
                
                
            </div>
            <WebPlayer></WebPlayer>
        </div>
    )
}

export default WebFrame