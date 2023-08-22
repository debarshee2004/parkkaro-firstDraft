import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

//const image = {uri: 'https://legacy.reactjs.org/logo-og.png'}

export default function Loading() {
  return (
    <ImageBackground style={styles.container} source={require('../images/Loading_Screen.png')}>
      <View>
        <ProgressBar style={styles.loading} progress={0.3} width={200} height={15}  />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loading:{
    marginBottom: 50
  }
});
