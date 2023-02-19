import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import React from 'react';

const Stack = createStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="account"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={AccountScreen} name="account_screen" />
      <Stack.Screen component={LoginScreen} name="login" />
      <Stack.Screen component={SignupScreen} name="signup" />
    </Stack.Navigator>
  );
};

export default AccountStack;
