import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('login');
  }, 2000);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/cgi_logo_splash-screen.png')}
      />
      <Text style={styles.logoText}>LW CHURCH GROWTH INTERNATIONAL</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005EE3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    marginBottom: 15,
  },
  logoText: {
    marginTop: 15,
    color: 'gold',
    fontSize: 13,
  },
});
export default Splash;
