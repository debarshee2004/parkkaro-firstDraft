import { StyleSheet, View, StatusBar } from 'react-native'
import React from 'react'
import Loading from './components/loading'
import Splash from './components/splash'
import Home from './components/home'
import Maps from './components/find'
import Wallet from './components/wallet'
import Profile from './components/profile'

// import { Navigator } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View>
      <Profile/>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});