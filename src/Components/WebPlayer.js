import React from 'react'
import './WebPlayer.css'
import Player from './Audio'

const WebPlayer=() =>{
    return (
        <nav className='fixed-bottom Player-Footer bt  b--black'>
            <div className='song-img '>
                <img className='' src='https://i.scdn.co/image/ab67616d00004851a0419b40e3d657cdfb0d9343'></img>
                <div className='ml2'>
                    <p className='white mb0 '>Kan Lak ma'aya cairookee</p>
                    <p id='band' className='f7 lh-copy'> ay haga</p>
                </div>
            </div>
            {/* <audio controls className='audio mt2'>
                <source src='' type='audio/mpeg'></source>
            </audio> */}
            <Player></Player>
        </nav>
    )
}

export default WebPlayer