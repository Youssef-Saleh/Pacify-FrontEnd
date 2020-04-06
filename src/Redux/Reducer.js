
import {StreamSong} from './Constants'

const InitialState ={
    songs:[]
}

const Reducer =(state=InitialState,Action)=>{
    switch(Action.type){
        case StreamSong:
        return {
            ...state,
            songs: Action.payload
        }
    }
}

export default Reducer