import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View accessibilityLabel="app-root">
      <TouchableOpacity
      accessibilityLabel="logout" 
      onPress={() => navigation.goBack()}
        style={{
          backgroundColor: '#00CC33',
          width: 200,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 100,
        }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
