import React, {Component} from 'react';
// import './Albums.css';
import PlaylistHeader from '../Components/PlaylistHeader'
import AlbumCardList from '../Components/AlbumCardList';
import {albumsdata} from '../Components/albumsdata';

// import MediaQuery from 'react-responsive';
class Album extends Component {

  render() {

    return (

      <div className="conatiner d-felx vh-100 w-100 dt" id="cardsplaylist">


          <h1 className='pl3 fw7 pt5 f3 lh-title white'> Albums</h1>
                
            <PlaylistHeader></PlaylistHeader>
           <AlbumCardList albumsdata={albumsdata}/>

    
      </div>

    );

  }

}

export default Album;
