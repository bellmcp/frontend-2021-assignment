import { SET_FLASH_MESSAGE, CLEAR_FLASH_MESSAGE } from './actions'

const initialState = {
  flashMessage: null,
}

/**
 * @function UiReducer
 * @param {array} state - Object of flashMessage
 * @param {object} action - Action to be reduced
 * @returns {object} - New ui state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FLASH_MESSAGE:
      return { ...state, flashMessage: action.payload.message }
    case CLEAR_FLASH_MESSAGE:
      return { ...state, flashMessage: null }
    default:
      return state
  }
}
