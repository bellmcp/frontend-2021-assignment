import {
  LOAD_FRIENDS_REQUEST,
  LOAD_FRIENDS_SUCCESS,
  LOAD_FRIENDS_FAILURE,
} from './actions'

const initialState = {
  isLoading: false,
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_FRIENDS_REQUEST:
      return { ...state, isLoading: true, items: [] }
    case LOAD_FRIENDS_SUCCESS:
      return { ...state, isLoading: false, items: action.payload.friends }
    case LOAD_FRIENDS_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
