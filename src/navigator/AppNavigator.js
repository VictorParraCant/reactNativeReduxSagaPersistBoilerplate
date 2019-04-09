import React from 'react'
import { createStackNavigator } from 'react-navigation'

// Containers
import Home from '../containers/home/Home'

const MainApp = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Home',
      headerTitleAllowFontScaling: true,
      headerStyle: { backgroundColor: '#FFFFFF' },
      headerTintColor: '#747474',
      headerTitleStyle: { fontWeight: '500', fontSize: 20 }
    }
  }
)

export default MainApp
