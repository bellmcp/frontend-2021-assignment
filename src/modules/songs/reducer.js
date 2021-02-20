import {
  LOAD_SONG_REQUEST,
  LOAD_SONG_SUCCESS,
  LOAD_SONG_FAILURE,
} from './actions'

const initialState = {
  isLoading: false,
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_SONG_REQUEST:
      return { ...state, isLoading: true, items: [] }
    case LOAD_SONG_SUCCESS:
      return { ...state, isLoading: false, items: action.payload.songs }
    case LOAD_SONG_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
