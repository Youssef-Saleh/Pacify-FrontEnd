import React, { Component } from 'react'
import WebPlayer from '../Components/WebPlayer'
import SideBar from '../Components/SideBar'
import WebNav from '../Components/WebNav'
import PlaylistInsidePage from './PlaylistInsidePage'
import Albums from '../Containers/Albums'
import AlbumInsidePage from '../Containers/AlbumInsidePage'
import './WebFrame.css'
import SearchPage from './SearchPage'
import CreatePlaylist from '../Components/CreatePlaylist'
import PlayList from '../Containers/Playlist'
import LikedSongs from '../Components/LikedSongs'
import {BrowserRouter as Router , Switch , Route , Link,Redirect} from 'react-router-dom'
import Pages from './SearchPages'
import Playlist from '../Containers/Playlist'

class WebFrame extends Component{
    constructor(props){
        super(props);

        let loggedIn=true
        let token=sessionStorage.getItem("token")
        console.log("the token is  ",token)
        if (token == null){
            loggedIn=false
        }

        this.state ={
            ShowPopUp: false,
            loggedIn
        }
    }
    TogglePopUp=()=>{
        console.log("function called")
        this.setState({ShowPopUp: true})
        
    }
    
    render(){
    
            if (this.state.loggedIn === false){
                return(
                    <Redirect to='../Login'></Redirect>
                )
            }
        
        return (


            <div>
            
                {/* {
                   this.state.ShowPopUp ? <CreatePlaylist></CreatePlaylist>:<div>not true</div>
                } */}
                <div className=''>
                    <SideBar ></SideBar>
                    <WebPlayer></WebPlayer>
                    {/* <WebNav></WebNav> */}
                    {/* <Router> */}
                            <div className='web-frame '>    {/*The Content of the page is placed here,,routing also will be here*/ }
                            <Switch>
                                <Route  path='/WebFrame/Home'>
                                    <h1>HELLLLLLLLLLLLOOOOOOOOOO!!!!!</h1>
                                </Route>
                                <Route  path='/WebFrame/LikedSongs'>
                                    <LikedSongs></LikedSongs>
                                </Route>
                                <Route path='/WebFrame/Page_:id' component ={Pages}>
                                </Route>
                                {/* <Route  path='/WebFrame/Pages'>
                                    <Pages></Pages>
                                </Route> */}
                                <Route  path='/WebFrame/Search'>
                                    <SearchPage></SearchPage>
                                </Route>
                                <Route  path='/WebFrame/Library'>
                                    <Playlist></Playlist>
                                </Route>
                                <Route  path='/WebFrame/PlaylistInsidePage'>
                                    <PlaylistInsidePage></PlaylistInsidePage>
                                </Route>
                                <Route  path='/WebFrame/AlbumInsidePage'>
                                    <AlbumInsidePage></AlbumInsidePage>
                                </Route>
                                <Route  path='/WebFrame/'>
                                <CreatePlaylist></CreatePlaylist>
                                </Route>
                                
                            </Switch>

                            </div>
                    {/* </Router> */}
                            
                </div>
            </div>
        )

    }
}
    


export default WebFrame