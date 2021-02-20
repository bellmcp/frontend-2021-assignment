const SET_FLASH_MESSAGE = 'app/ui/SET_FLASH_MESSAGE'
const CLEAR_FLASH_MESSAGE = 'app/ui/CLEAR_FLASH_MESSAGE'

/**
 * @function setFlashMessage
 * @returns {object} - Action object with type `SET_FLASH_MESSAGE`
 */

function setFlashMessage(message) {
  return {
    type: SET_FLASH_MESSAGE,
    payload: {
      message,
    },
  }
}

function clearFlashMessage(message) {
  return {
    type: CLEAR_FLASH_MESSAGE,
  }
}

export {
  SET_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE,
  setFlashMessage,
  clearFlashMessage,
}
