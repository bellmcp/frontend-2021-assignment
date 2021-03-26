import { SET_FLASH_MESSAGE, CLEAR_FLASH_MESSAGE } from './actions'

const initialState = {
  isSnackbarOpen: false,
  flashMessage: null,
  alertType: null,
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
      return {
        ...state,
        isSnackbarOpen: true,
        flashMessage: action.payload.message,
        alertType: action.payload.severity,
      }
    case CLEAR_FLASH_MESSAGE:
      return { ...state, isSnackbarOpen: false }
    default:
      return state
  }
}
