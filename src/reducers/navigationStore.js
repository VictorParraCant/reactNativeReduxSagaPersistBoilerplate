import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../navigator/AppNavigator'

const navigationStore = createNavigationReducer(AppNavigator)
export default navigationStore
