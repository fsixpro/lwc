import React from 'react';
import {View, Text, Image} from 'react-native';
import AppColor from '../modules/AppColor';
import QuizTab from './quiz/QuizTab';
import Header from '../Header';
const Quiz = () => {
  return (
    <>
      <View>
        <Header title="Quiz" />
      </View>
      <QuizTab />
    </>
  );
};

export default Quiz;
