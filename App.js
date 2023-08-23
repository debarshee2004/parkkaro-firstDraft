import { StyleSheet, View, StatusBar } from 'react-native'
import React from 'react'
import Loading from './components/loading'
import Splash from './components/splash'
import Home from './components/home'

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
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
