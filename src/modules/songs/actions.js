import axios from 'axios/config'
import * as uiActions from 'modules/ui/actions'

const LOAD_SONG_REQUEST = 'app/songs/LOAD_SONG_REQUEST'
const LOAD_SONG_SUCCESS = 'app/songs/LOAD_SONG_SUCCESS'
const LOAD_SONG_FAILURE = 'app/songs/LOAD_SONG_FAILURE'

/**
 * Returns Redux Thunk function that dispatches LOAD_SONG action
 * @function loadSong
 * @returns {function} - Redux Thunk function.
 */
function loadSong(id) {
  return async (dispatch) => {
    dispatch({ type: LOAD_SONG_REQUEST })
    try {
      const { data } = await axios.get(`/melody/${id}`)
      dispatch({
        type: LOAD_SONG_SUCCESS,
        payload: {
          songs: data,
        },
      })
    } catch (err) {
      dispatch({ type: LOAD_SONG_FAILURE })
      dispatch(
        uiActions.setFlashMessage(
          `Cannot load song. (Error ${err?.response?.status})`,
          'error'
        )
      )
    }
  }
}

export { LOAD_SONG_REQUEST, LOAD_SONG_SUCCESS, LOAD_SONG_FAILURE, loadSong }
