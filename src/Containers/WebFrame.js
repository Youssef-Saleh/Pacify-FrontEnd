import React from 'react'
import WebPlayer from '../Components/WebPlayer'
import SideBar from '../Components/SideBar'
import WebNav from '../Components/WebNav'
import './WebFrame.css'
const WebFrame = ()=>{
    return (
        <div>
            <SideBar></SideBar>
            <div className='web-frame'>    {/*The Content of the page is placed here*/ } 
                <WebNav></WebNav>
            </div>
            <WebPlayer></WebPlayer>
        </div>
    )
}

export default WebFrame