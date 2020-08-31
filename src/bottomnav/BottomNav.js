import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Dashboard from './Dashboard';
import Tools from './Tools';
import Training from './Training';
import Quiz from './Quiz';
import Profile from './Profile';
const Tab = createMaterialBottomTabNavigator();
const BottomNav = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        shifting={false}
        activeColor="blue"
        inactiveColor="grey"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon name="home" color={focused ? 'blue' : 'grey'} size={25} />
            ),
          }}
          name="Dashbord"
          component={Dashboard}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Tools',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="address-card"
                color={focused ? 'blue' : 'grey'}
                size={25}
              />
            ),
          }}
          name="Tools"
          component={Tools}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Training',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="graduation-cap"
                color={focused ? 'blue' : 'grey'}
                size={25}
              />
            ),
          }}
          name="Training"
          component={Training}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Quiz',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="comments"
                color={focused ? 'blue' : 'grey'}
                size={25}
              />
            ),
          }}
          name="Quiz"
          component={Quiz}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon name="user" color={focused ? 'blue' : 'grey'} size={25} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
