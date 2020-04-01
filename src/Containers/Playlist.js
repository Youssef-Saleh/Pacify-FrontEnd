import React, {Component} from 'react';
import PlaylistHeader from '../Components/PlaylistHeader'
import PlaylistCardList from '../Components/PlaylistCardList';
// import LikedSongsCard from '../Components/LikedSongsCard';
// import LikedSongslist from '../Components/LikedSongslist';
import {playlistsdata} from '../Components/playlistsdata';
import {likedsongsdata} from '../Components/likedsongsdata';

import './Playlist.css'

// import MediaQuery from 'react-responsive';
class Playlist extends Component {

  render() {

    return (

      <div className=" vh-100 w-100 dt" id="cardsplaylist">
          <PlaylistHeader></PlaylistHeader>

                <h1 className='pl3 fw7 pt5 f3 lh-title white'> Playlists</h1>
{/* 
                <LikedSongsCard 
                  id={likedsongsdata[0].id} artist={likedsongsdata[0].artist} name={likedsongsdata[0].name}
                  id1={likedsongsdata[1].id} artist1={likedsongsdata[1].artist} name1={likedsongsdata[1].name}
                  id2={likedsongsdata[2].id} artist2={likedsongsdata[2].artist} name2={likedsongsdata[2].name}
                >
                </LikedSongsCard>   */}
                <PlaylistCardList playlistsdata={playlistsdata} likedsongsdata={likedsongsdata}></PlaylistCardList>
               

      </div>

    );

  }

}

export default Playlist;
