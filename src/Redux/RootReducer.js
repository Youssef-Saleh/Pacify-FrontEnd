import {StreamReducer} from './songs/StreamReducer';
import {combineReducers} from 'redux'
import {LikeReducer} from './songs/LikeReducer'
import {PageReducer} from './Pages/PagesReducer'
const RootReducer=combineReducers({
    stream: StreamReducer,
    like: LikeReducer,
    page: PageReducer
})

export default RootReducer;