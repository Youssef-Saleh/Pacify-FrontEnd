import React from 'react'
import WebPlayer from '../Components/WebPlayer'
import SideBar from '../Components/SideBar'
import WebNav from '../Components/WebNav'
import './WebFrame.css'
import SearchPage from './SearchPage'
import CreatePlaylist from '../Components/CreatePlaylist'
import PlayList from '../Containers/Playlist'
import LikedSongs from '../Components/LikedSongs'
const WebFrame = ()=>{
    return (
        <div>
        
            <SideBar></SideBar>
            
            <WebNav></WebNav>
            
            <div className='web-frame '>    {/*The Content of the page is placed here,,routing also will be here*/ }
                <LikedSongs></LikedSongs>
                
            </div>
            <WebPlayer></WebPlayer>
        </div>
    )
}

export default WebFrame