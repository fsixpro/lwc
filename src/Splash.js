import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AppColor from './modules/AppColor';
import {connect} from 'react-redux';

const Splash = ({navigation, authUser}) => {
  useEffect(() => {
    setTimeout(() => {
      if (authUser.isLogged) {
        navigation.navigate('bottomnav');
      } else {
        navigation.navigate('login');
      }
    }, 2000);
  }, []);

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
const mapStateToProps = (state) => ({
  authUser: state.auth,
});
export default connect(mapStateToProps, {})(Splash);
