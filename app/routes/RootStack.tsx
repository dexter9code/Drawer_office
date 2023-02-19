import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AccountStack from './AccountStack';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const RootStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        component={HomeScreen}
        name="home"
        options={{
          drawerLabelStyle: {
            fontSize: 17,
            textTransform: 'capitalize',
            fontWeight: '600',
          },
          title: 'HOME',
          drawerIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        component={WelcomeScreen}
        name="welcome"
        options={{
          drawerLabelStyle: {
            fontSize: 17,
            textTransform: 'capitalize',
            fontWeight: '600',
          },
          title: `Bookmarks`,
          drawerIcon: ({size, color}) => (
            <MIcon name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        component={AccountStack}
        name="Account"
        options={{
          drawerLabelStyle: {
            fontSize: 17,
            textTransform: 'capitalize',
            fontWeight: '600',
          },
          title: 'Account',
          drawerIcon: ({color, size}) => (
            <MIcon name="account" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootStack;
