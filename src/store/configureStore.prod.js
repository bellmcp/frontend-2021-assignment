import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from 'modules/reducers'

export default function configureStore(initialState) {
  const middleware = [reduxThunk]
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
  return store
}
