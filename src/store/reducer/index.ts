import { combineReducers } from 'redux'

import userReducer from './user.reducer'
import postsReducer from './posts.reducer'

const reducer = combineReducers({
  userState: userReducer,
  postsState: postsReducer
})

export default reducer