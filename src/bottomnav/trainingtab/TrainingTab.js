import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Videos from './Videos';
import Webinars from './Webinars';
import LiveSession from './LiveSession';
import AppColor from '../../modules/AppColor';

const Tab = createMaterialTopTabNavigator();
const TrainingTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: AppColor.WHITE,
          },
          labelStyle: {
            fontSize: 17,
            color: AppColor.WHITE,
          },
          style: {backgroundColor: AppColor.PRIMARY_COLOR},
        }}>
        <Tab.Screen name="VIDEOS" component={Videos} />
        <Tab.Screen name="WEBINNARS" component={Webinars} />
        <Tab.Screen name="LIVE SESSION!" component={LiveSession} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TrainingTab;
