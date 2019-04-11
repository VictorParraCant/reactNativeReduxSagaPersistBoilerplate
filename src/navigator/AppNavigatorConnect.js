import React from 'react'
import { connect } from 'react-redux'
import { createReduxContainer } from 'react-navigation-redux-helpers'

import AppNavigator from './AppNavigator'

const AppNavigatorConnect = createReduxContainer(AppNavigator)

const mapStateToProps = (state) => ({
  state: state.navigation
})

export default connect(mapStateToProps)(AppNavigatorConnect)
