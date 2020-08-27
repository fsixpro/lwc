import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './Store';
import {Provider} from 'react-redux';
const Stack = createStackNavigator();

import Splash from './src/Splash';
import Login from './src/Login';
import Signup from './src/Signup';
import BottomNav from './src/bootomnav/BottomNav';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="bottomnav" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
