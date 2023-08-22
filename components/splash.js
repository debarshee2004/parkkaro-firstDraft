import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Splash = () => {
  return (
    <ImageBackground style={styles.container} source={require('../images/Splash_Screen.png')}>
      <View style={styles.button}>
        <TouchableOpacity style={styles.insidebutton}>
            <Text style={styles.getstarted}>
                Get Started
            </Text>
            <AntDesign name="rightcircle" size={48} color="black" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button:{
    backgroundColor: '#fff',
    height: '8%',
    width: '80%',
    borderRadius: 50,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getstarted:{
    fontSize: 25,
    marginRight: 30,
    marginLeft: 70
  },
  insidebutton:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});