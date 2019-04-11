import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// Containers
import Home from '../containers/home/Home'
import Profile from '../containers/profile/Profile'

const HomeView = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
      gesturesEnabled: true,
      headerTitleAllowFontScaling: true,
      headerStyle: { backgroundColor: '#FFFFFF' },
      headerTintColor: '#747474',
      headerTitleStyle: { fontWeight: '500', fontSize: 20 }
    }
  }
)

const ProfileView = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      gesturesEnabled: true,
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Profile',
      gesturesEnabled: true,
      headerTitleAllowFontScaling: true,
      headerStyle: { backgroundColor: '#FFFFFF' },
      headerTintColor: '#747474',
      headerTitleStyle: { fontWeight: '500', fontSize: 20 }
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeView,
      gesturesEnabled: true,
      navigationOptions: {
        title: 'Home',
        gesturesEnabled: true,
      }
    },
    Profile: {
      screen: ProfileView,
      gesturesEnabled: true,
      navigationOptions: {
        title: 'Profile',
        gesturesEnabled: true,
      }
    }
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    defaultNavigationOptions: {
      title: 'Test App',
      headerTitleAllowFontScaling: true,
      gesturesEnabled: true,
      headerStyle: { backgroundColor: '#FFFFFF' },
      headerTintColor: '#747474',
      headerTitleStyle: { fontWeight: '500', fontSize: 20 }
    },
    tabBarOptions: {
      activeTintColor: '#D0571A',
      inactiveTintColor: '#a3a2a2'
    }
  }
)
const AppNavigator = createAppContainer(TabNavigator)
export default AppNavigator
