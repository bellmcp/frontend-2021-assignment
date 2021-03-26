import { createStore } from 'redux'
import FriendsReducer from 'modules/friends/reducer'

/**
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: UiReducer
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {store} - Redux store
 */
export const storeFactory = (initialState) => {
  createStore(FriendsReducer, initialState)
}

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
