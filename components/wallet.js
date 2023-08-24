import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 

const Wallet = () => {
  return (
    <View>
      <View>
        <View>
          <TouchableOpacity>
            <Ionicons name="menu" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Wallet</Text>
          <Entypo name="wallet" size={24} color="black" />
        </View>
      </View>
      <TouchableOpacity>
        <View>
          <Text>Cash available</Text>
          <View>
            <FontAwesome5 name="money-bill-wave" size={24} color="black" />
            <Text>100.00</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <Text>Payment methods</Text>
      </View>
      <TouchableOpacity>
        <View>
          <MaterialIcons name="mobile-friendly" size={24} color="black" />
          <Text>UPIs</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <FontAwesome name="cc-mastercard" size={24} color="black" />
          <Text>Debit Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <FontAwesome name="cc-visa" size={24} color="black" />
          <Text>Credit Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <FontAwesome5 name="google-pay" size={24} color="black" />
          <Text>Google Pay</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Text>
            Add Other Methods
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Text>
            Promo Codes
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({})