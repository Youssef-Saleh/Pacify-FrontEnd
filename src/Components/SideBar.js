import React, { Component } from 'react'
import './SideBar.css'
import './NavBar.css'
import Webframe from '../Containers/WebFrame'
import Library from '../library.PNG'
import { Link } from 'react-router-dom'
import CreatePlaylist from './CreatePlaylist'

class SideBar extends Component{
    state = {
        modalOpen: false
     }
   
     handleModalOpen = () => {
        this.setState((prevState) => {
           return{
              modalOpen: !prevState.modalOpen
           }
        })
     }
    render(){
    return (
        <div className='sidenav'>
            <img className='ml4 mt2' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' width='131' height='40'></img>
            <div className='mt4 ml4'>
                <div className=''>
                    <img className='dib mb1' width='24' height='24' src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559065.jpg'></img>
                    <Link to='../WebFrame/Home'><div className='dib  ml3 fw-900'>Home</div></Link>
                </div>
                <div className='mt3'>
                    <img className='dib mb1' width='24' height='20' src='https://www.pngkit.com/png/full/22-228161_free-icons-png-search-button-png-white.png'></img>
                    <Link to='../WebFrame/Search'><div className='dib  ml3 fw-900'>Search</div></Link>
                </div>
                <div className='mt3'>
                    <img className='dib mb1' width='24' height='24' src={Library}></img>
                    <Link to='../WebFrame/Library'><div className='dib  ml3 fw-900'>Library</div></Link>
                </div>
                
            </div>
            <div className='ml4 mt4'>
                <p className='f6 lh-copy'>PLAYLISTS</p>
                <div className='mt4'>
                    <div>
                        <img width='24' height='24' className='dib' src='https://previews.123rf.com/images/alionaursu/alionaursu1909/alionaursu190900024/129840824-plus-icon-vector-design-isolated-on-white-background.jpg'></img>
                        <div  className='dib ml3 fw-900 pointer'><span onClick={this.handleModalOpen}>Create Playlist</span></div>
                    </div>
                    <div className='mt3'>
                        <img width='24' height='24' className='dib' src='https://4.bp.blogspot.com/-XzJ5OnL023w/XHbn9ondWXI/AAAAAAAAIDM/3LZfHpJcGjQ7Qtv5dSKmLpFQnLqtIi4ZwCK4BGAYYCw/s1600/heart%2Blove%2Bicon.png'></img>
                        <Link to='../WebFrame/LikedSongs'><div className='dib ml3 fw-900'>Liked Songs</div></Link>
                    </div>
                </div>
                <hr id='hor-row'></hr>
            </div>
            <CreatePlaylist
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />
        </div>
    )};
}

export default SideBar