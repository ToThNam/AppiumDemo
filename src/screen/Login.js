import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Login = ({navigation}) => {
  const [Name, userName] = useState('');
  const [Pasword, usePasword] = useState('');
  const [isLogined, useIsLogined] = useState(false);
const Login =() => {
  if (Name == 'nam' && Pasword == '123456'){
    useIsLogined(true);
    navigation.navigate('Home');
  }
  else {
    useIsLogined(false)
  }
}
  return (
    <View style={{ marginTop: 20 }} testID="app-root" accessibilityLabel="app-root">
      <Text style={{ marginLeft: 10 }}>userName</Text>
      <TextInput
        onChangeText={userName}
        value={Name}
        accessibilityLabel="username"
        placeholderTextColor="grey"
        placeholder="Enter your email here"
        style={{
          borderWidth: 1,
          borderColor: '#00CC33',
          height: 40,
          width: 300,
          marginLeft: 40,
          color: 'black',
          marginTop: 10,
        }}
      />
      <Text style={{ marginTop: 10, marginLeft: 10 }}>Pasword</Text>
      <TextInput
        onChangeText={usePasword}
        value={Pasword}
        // secureTextEntry
        accessibilityLabel="password"
        placeholderTextColor="grey"
        placeholder="Enter your password here"
        style={{
          borderWidth: 1,
          borderColor: '#00CC33',
          height: 40,
          width: 300,
          marginLeft: 40,
          color: 'black',
          marginTop: 10,
        }}
      />
      <TouchableOpacity
      accessibilityLabel="login" 
      onPress={() => Login()}
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
        <Text style={{ color: 'white', fontSize: 17 }}>Login</Text>
      </TouchableOpacity>
      <Text accessibilityLabel="loginstatus">{isLogined ? "success" : "fail"}</Text>

    </View>
  )}

export default Login
