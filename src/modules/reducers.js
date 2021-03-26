import { combineReducers } from 'redux'
import ui from 'modules/ui/reducer'
import friends from 'modules/friends/reducer'
import songs from 'modules/songs/reducer'

export default combineReducers({
  ui,
  friends,
  songs,
})
