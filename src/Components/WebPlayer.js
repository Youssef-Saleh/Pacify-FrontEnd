import React from 'react'
import './WebPlayer.css'
const WebPlayer=() =>{
    return (
        <nav className='fixed-bottom Player-Footer bt  b--black'>
            <div className='song-img '>
                <img className='dib' src='https://i.scdn.co/image/ab67616d00004851a0419b40e3d657cdfb0d9343'></img>
                <p className='dib white ml2'>Kan Lak ma'aya cairookee</p>
            </div>
            <audio controls className='audio mt3'>
                <source src='' type='audio/mpeg'></source>
            </audio>
        </nav>
    )
}

export default WebPlayer