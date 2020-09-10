import React from 'react';
import {View, Text, Image} from 'react-native';
import AppColor from '../modules/AppColor';
import TrainingTab from './trainingtab/TrainingTab';
import Header from '../Header';

const Training = () => {
  return (
    <>
      <View>
        <Header title="Training" />
      </View>
      <TrainingTab />
    </>
  );
};

export default Training;
