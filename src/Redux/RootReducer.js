import StreamReducer from './songs/StreamReducer';
import {combineReducers} from 'redux'


const RootReducer=combineReducers({
    stream: StreamReducer
})

export default RootReducer;