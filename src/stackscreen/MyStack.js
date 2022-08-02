import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../Splash';
import Login from '../Login';
import Signup from '../Signup';
import BottomNav from '../bottomnav/BottomNav';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const MyStack = () => {
  const {isLogged} = useSelector((state) => state.auth);
  console.log(isLogged);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isLogged ? (
          <Stack.Screen name="bottomnav" component={BottomNav} />
        ) : (
          <>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
