import React, {Component} from 'react';
import PlaylistHeader from '../Components/PlaylistHeader'
import PlaylistCardList from '../Components/PlaylistCardList';
// import LikedSongsCard from '../Components/LikedSongsCard';
//import LikedSongslist from '../Components/LikedSongslist';
import {playlistsdata} from '../Components/playlistsdata';
import {likedsongsdata} from '../Components/likedsongsdata';

import './Playlist.css'

// import MediaQuery from 'react-responsive';
class Playlist extends Component {

  constructor(props) {        
    super(props)
    this.state= {

        playlistsdata:playlistsdata,  
        // likedPlaylists:[] ,
        CardID:" ",                      
        //likedsongsdata:[],
       }
}

// componentDidMount(){

//     fetch('http://localhost:5000/likedPlaylists')   
//     console.log("fetching")
//   .then(response=> {

//       return response.json();
//   })
//   .then(users => {

//       this.setState({  playlistsdata: users })
//       console.log("fetching")
//   })

//   console.log("fetching")

// }

PlayMusic =(event) =>{                                            
  this.setState({ CardID: event.target.getAttribute('idm') })

  console.log("Play the song")  
  console.log(this.state.CardID)  
  console.log(this.state.playlistsdata[(this.state.CardID)-1])

                                                                  
}

  render() {

    // console.log(this.state.playlistsdata.likedPlaylists)

    const {playlistsdata,likedPlaylists} =this.state

    return (

      <div className="vh-100 dt w-100" id="cardsplaylist">
          {/* <PlaylistHeader></PlaylistHeader> */}

                <h1 className='pl3 fw7 pt5 f3 lh-title white'> Playlists</h1>


                <PlaylistCardList 
                Music={this.PlayMusic}
                playlistsdata={playlistsdata} 

                likedsongsdata={likedsongsdata} 

                // likedPlaylists={likedPlaylists} 
                ></PlaylistCardList>
               

      </div>

    );

  }

}

export default Playlist;
