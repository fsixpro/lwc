import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../Splash';
import Login from '../Login';
import Signup from '../Signup';
import BottomNav from '../bottomnav/BottomNav';

const Stack = createStackNavigator();

const MyStack = ({user}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />

        <Stack.Screen name="bottomnav" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
