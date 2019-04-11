import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import rootReducer from '../reducers'
// import rootSaga from '../sagas'

const config = {
  key: 'root',
  storage,
  blacklist: ['app', 'navigation'],
  timeout: null,
}

const Reducer = persistCombineReducers(config, rootReducer)

// Middlewares
// const sagaMiddleware = createSagaMiddleware()
const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigation
)
const middlewares = [
  // sagaMiddleware,
  navigationMiddleware
]

const store = createStore(Reducer, applyMiddleware(...middlewares))
// sagaMiddleware.run(rootSaga)

const persistor = persistStore(store, null, () => store.getState())

export { store, persistor }
