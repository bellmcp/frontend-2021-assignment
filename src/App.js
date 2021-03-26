import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import Layout from 'modules/ui/components/Layout'
import Content from 'modules/ui/components/Content'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Layout children={<Content />} />
    </Provider>
  )
}
