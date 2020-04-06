
import {StreamSong} from '../Constants'

const InitialState ={
    songs:[]
}

const StreamReducer =(state=InitialState,Action)=>{
    switch(Action.type){
        case StreamSong:
        return {
            ...state,
            songs: Action.payload
        }
        default: return state;
    }
}

export default StreamReducer