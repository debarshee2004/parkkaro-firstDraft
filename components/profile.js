import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <TouchableOpacity>
            <Ionicons name="menu" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.home}>Account</Text>
          <TouchableOpacity>
            <AntDesign name="github" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.namebox}>
          <Text style={styles.name}>Hello James!</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <View>
            <MaterialIcons name="message" size={24} color="black" />
            <Text>Message</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Feather name="edit" size={24} color="black" />
            <Text>Edit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Ionicons name="settings" size={24} color="black" />
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <FontAwesome5 name="car-side" size={24} color="black" />
            <Text>Trips</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <MaterialCommunityIcons name="human-handsup" size={24} color="black" />
            <Text>Help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <FontAwesome5 name="money-check" size={24} color="black" />
            <Text>Transaction History</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
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
  }
})