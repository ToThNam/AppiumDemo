import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import Login from '../screen/Login';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default function AppStack() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}
