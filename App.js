import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'

import AppNavigatorConnect from './src/navigator/AppNavigatorConnect'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <AppNavigatorConnect />
      </PersistGate>
    </Provider>
  )
}

export default App
