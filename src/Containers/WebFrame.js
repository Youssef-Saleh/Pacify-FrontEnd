import React from 'react'
import WebPlayer from '../Components/WebPlayer'
import SideBar from '../Components/SideBar'
import WebNav from '../Components/WebNav'
import './WebFrame.css'
import SearchPage from './SearchPage'
import Playlist from './Playlist';
import Albums from './Albums';
const WebFrame = ()=>{
    return (
        <div>
            <SideBar></SideBar>
            <WebNav></WebNav>
            <div className='web-frame '>    {/*The Content of the page is placed here*/ }
                {/* <SearchPage></SearchPage> */}
                <Albums></Albums>
            </div>
            <WebPlayer></WebPlayer>
        </div>
    )
}

export default WebFrame