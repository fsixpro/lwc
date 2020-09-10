import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import AppColor from './modules/AppColor';

const Splash = ({navigation}) => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const log = async () => {
      try {
        const value = await AsyncStorage.getItem('isLogged');
        if (value !== null) {
          setIsLogged(value);
        }
      } catch (e) {
        // error reading value
      }
    };
    log();
  }, []);
  setTimeout(() => {
    console.log(isLogged);
    if (isLogged) {
      navigation.navigate('bottomnav');
    } else {
      navigation.navigate('login');
    }
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
    backgroundColor: AppColor.PRIMARY_COLOR,
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
