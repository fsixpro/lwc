import React from 'react';
import {View, Image, Text} from 'react-native';
import AppColor from './modules/AppColor';

const Header = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: AppColor.PRIMARY_COLOR,
        height: 80,
      }}>
      <Image
        resizeMode="center"
        style={{height: 60, top: 8, right: 20}}
        source={require('../assets/cgi_logo_splash-screen.png')}
      />
      <Text
        style={{
          color: '#fff',
          fontWeight: '700',
          fontSize: 20,
          right: 50,
          top: 30,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
