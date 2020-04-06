import {StreamSong} from '../Constants'

export const Stream =(Data)=>{
    return {
        type= {StreamSong},
        payload={Data}
    }
}