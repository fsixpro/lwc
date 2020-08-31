import React from 'react';
import {View, Text, Image} from 'react-native';
const Profile = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#005EE3',
          height: 80,
        }}>
        <Image
          resizeMode="center"
          style={{height: 60, top: 8, right: 20}}
          source={require('../../assets/cgi_logo_splash-screen.png')}
        />
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: 20,
            right: 50,
            top: 30,
          }}>
          Profile
        </Text>
      </View>
    </View>
  );
};

export default Profile;
