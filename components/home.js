import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.title}>
          <Ionicons name="menu" size={35} color="white" />
          <Text style={styles.home}>Home</Text>
          <AntDesign name="github" size={35} color="white" />
        </View>
        <View style={styles.namebox}>
          <Text style={styles.name}>Hello James!</Text>
        </View>
      </View>

      <View style={styles.seachbar}>
        <Text style={styles.home}>Where to Park?</Text>
        <View>
          <Ionicons name="car-sport" size={35} color="white" />
        </View>
      </View>

      <View style={styles.history}>
         <AntDesign name="clockcircle" size={24} color="rgb(80,80,80)" style={styles.clock}/>
        <View>
          <Text>
            Select Citywalk Mall
          </Text>
          <Text>
            Saket disctrict center, district center, sector 6, pushp vihar, New delhi, delhi 110017
          </Text>
        </View>
      </View>

      <View style={styles.feeling}>
        <Text style={styles.home}>
          How're ya feeling?
        </Text>
        <View>
          <MaterialCommunityIcons name="bell-circle" size={35} color="white" />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgba(80,80,80,0.5)'
  },
  header:{
    backgroundColor: '#3392ea',
    margin: 10,
    borderRadius: 10
  },
  title:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  home:{
    fontSize: 25,
    color: 'white'
  },
  namebox:{
    marginLeft:17
  },
  name:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  seachbar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:10,
    marginTop: 0,
    backgroundColor: '#454545',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50
  },
  history:{
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  clock:{
    marginRight: 20
  },
  feeling:{
    backgroundColor: '#3392ea',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50 
  }
})