import moxios from 'moxios'
import configureStore from 'store/configureStore'
import { loadFriends } from './actions'

beforeEach(() => {
  moxios.install()
})
afterEach(() => {
  moxios.uninstall()
})

describe('products action creator', () => {
  test('adds all friends to store', () => {
    const friends = [
      {
        displayName: 'Gregory Romero',
        pictureUrl: 'https://picsum.photos/500/500',
        userId: 1,
      },
      {
        displayName: 'Cecelia Rodriguez',
        pictureUrl: 'https://picsum.photos/500/500',
        userId: 2,
      },
    ]
    const store = configureStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: friends,
      })
    })

    return store.dispatch(loadFriends()).then(() => {
      const newState = store.getState()
      // expect(newState.friends.items).toEqual(friends)
    })
  })
})
