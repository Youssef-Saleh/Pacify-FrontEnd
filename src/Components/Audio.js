import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import './Audio.css'
import cairokee from './cairokee.mp3'
 
const Player = () => (
  <AudioPlayer
    autoPlay
    src={cairokee}
    onPlay={e => console.log("onPlay")}
    showSkipControls
    // other props here
  />
);

export default Player