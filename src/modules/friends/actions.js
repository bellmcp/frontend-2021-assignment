import axios from 'axios/config'
import * as uiActions from 'modules/ui/actions'

const LOAD_FRIENDS_REQUEST = 'app/friends/LOAD_FRIENDS_REQUEST'
const LOAD_FRIENDS_SUCCESS = 'app/friends/LOAD_FRIENDS_SUCCESS'
const LOAD_FRIENDS_FAILURE = 'app/friends/LOAD_FRIENDS_FAILURE'
const SEND_GIFT_REQUEST = 'app/friends/SEND_GIFT_REQUEST'
const SEND_GIFT_SUCCESS = 'app/friends/SEND_GIFT_SUCCESS'
const SEND_GIFT_FAILURE = 'app/friends/SEND_GIFT_FAILURE'

/**
 * Returns Redux Thunk function that dispatches LOAD_FRIENDS action
 * @function loadFriends
 * @returns {function} - Redux Thunk function.
 */
function loadFriends() {
  return async (dispatch) => {
    dispatch({ type: LOAD_FRIENDS_REQUEST })
    try {
      const { data } = await axios.get('/friends')
      dispatch({
        type: LOAD_FRIENDS_SUCCESS,
        payload: {
          friends: data.items,
        },
      })
    } catch (err) {
      dispatch({ type: LOAD_FRIENDS_FAILURE })
      dispatch(
        uiActions.setFlashMessage(
          `Cannot load friends list. (Error ${err?.response?.status})`,
          'error'
        )
      )
    }
  }
}

function sendGift(userId, melodyId, userName) {
  return async (dispatch) => {
    dispatch({ type: SEND_GIFT_REQUEST })
    try {
      await axios.post('/purchase', {
        userId,
        melodyId,
      })
      dispatch({
        type: SEND_GIFT_SUCCESS,
      })
      dispatch(
        uiActions.setFlashMessage(
          `Successfully sent melody to ${userName}`,
          'success'
        )
      )
    } catch (err) {
      dispatch({ type: SEND_GIFT_FAILURE })
      dispatch(
        uiActions.setFlashMessage(
          `Cannot send melody to ${userName}, Please try again. (Error ${err?.response?.status})`,
          'error'
        )
      )
    }
  }
}

export {
  LOAD_FRIENDS_REQUEST,
  LOAD_FRIENDS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
  SEND_GIFT_REQUEST,
  SEND_GIFT_SUCCESS,
  SEND_GIFT_FAILURE,
  loadFriends,
  sendGift,
}
