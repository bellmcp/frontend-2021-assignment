import axios from 'axios'
const LOAD_FRIENDS_REQUEST = 'app/products/LOAD_FRIENDS_REQUEST'
const LOAD_FRIENDS_SUCCESS = 'app/products/LOAD_FRIENDS_SUCCESS'
const LOAD_FRIENDS_FAILURE = 'app/products/LOAD_FRIENDS_FAILURE'

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
    } catch (error) {
      dispatch({ type: LOAD_FRIENDS_FAILURE })
    }
  }
}

export {
  LOAD_FRIENDS_REQUEST,
  LOAD_FRIENDS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
  loadFriends,
}
