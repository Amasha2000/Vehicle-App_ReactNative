import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import AddVehicle from './AddVehicle';
import ViewVehicle from './ViewVehicle';

const Tab = createMaterialBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="AddVehicle"
      activeColor="#6F1E51"
      barStyle={{backgroundColor: '#9980FA'}}>
      <Tab.Screen
        name="Add"
        component={AddVehicle}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book-cross" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="View"
        component={ViewVehicle}
        options={{
          tabBarLabel: 'View',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book-edit" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}