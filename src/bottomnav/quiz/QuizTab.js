import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import AppColor from '../../modules/AppColor';
import TestHistory from './TestHistory';
import TakeTest from './TakeTest';

const Tab = createMaterialTopTabNavigator();
const QuizTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: AppColor.WHITE,
          },
          labelStyle: {
            fontSize:20,
            color: AppColor.WHITE,
          },

          style: {backgroundColor: AppColor.PRIMARY_COLOR},
        }}>
        <Tab.Screen name="TEST HISORY" component={TestHistory} />
        <Tab.Screen name="TAKE TEST" component={TakeTest} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default QuizTab;
