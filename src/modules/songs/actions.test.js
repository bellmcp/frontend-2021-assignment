import moxios from 'moxios'
import configureStore from 'store/configureStore'
import { loadSong } from './actions'

beforeEach(() => {
  moxios.install()
})
afterEach(() => {
  moxios.uninstall()
})

describe('songs action creator', () => {
  test('adds selected song to store', () => {
    const song = [
      {
        id: 99,
        artist: {
          name: 'VANGOE',
          nameEn: 'VANGOE',
          picture:
            'https://melody-assets.line-scdn.net/artists/public/5e9000df-2db9-40f1-a379-bf82e8a0e267.jpeg',
        },
        price: 60,
        coin: 100,
        coverPic:
          'https://melody-assets.line-scdn.net/musics/public/b02e9fe2-dd9d-435a-9e80-e519464be4de.jpeg',
        title: 'เก็บทรงไม่อยู่ Feat. DIAMOND MQT',
        titleEn: 'Keb Soong Mai Yu Feat. DIAMOND MQT',
      },
    ]
    const store = configureStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: song,
      })
    })

    return store.dispatch(loadSong(99)).then(() => {
      const newState = store.getState()
      expect([newState.songs.items]).toEqual(song)
    })
  })
})
