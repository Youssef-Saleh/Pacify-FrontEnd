import {StreamReducer} from './songs/StreamReducer';
import {combineReducers} from 'redux'
import {LikeReducer} from './songs/LikeReducer'

const RootReducer=combineReducers({
    stream: StreamReducer,
    like: LikeReducer
})

export default RootReducer;