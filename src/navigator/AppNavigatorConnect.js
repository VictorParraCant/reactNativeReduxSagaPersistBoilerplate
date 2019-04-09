import React from 'react'
import { connect } from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'

import AppNavigator from './AppNavigator'

const AppNavigatorConnect = reduxifyNavigator(AppNavigator, 'nav-root')

const mapStateToProps = (state) => ({
  state: state.navigation
})

export default connect(mapStateToProps)(AppNavigatorConnect)
