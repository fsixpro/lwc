import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AppColor from './modules/AppColor';
import Apicall from './network/ApiCall';
const apicall = new Apicall();
import AsyncStorage from '@react-native-community/async-storage';
const Login = ({navigation, signin, user}) => {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  const {email, password} = formInput;
  const [spinToggle, setSpinToggle] = useState(false);
  const onChangeHandler = (text) => {
    setFormInput({...formInput, ...text});
  };
  const loginHandler = async () => {
    if (email == '' || password == '') {
      Alert.alert('Erro', 'input email and password');
    } else {
      const param = {
        email,
        password,
      };
      try {
        setSpinToggle(true);
        const res = await apicall.signin(param);
        if (res.status == 200) {
          setSpinToggle(false);
          await AsyncStorage.setItem('username', res.data.data.name);
          await AsyncStorage.setItem('email', res.data.data.email);
          await AsyncStorage.setItem('isLogged', 'true');
          navigation.navigate('bottomnav');
        } else {
          setSpinToggle(false);
          Alert.alert('error', res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={spinToggle}
        size="large"
        animation="slide"
        //color="#f85c5f"
      />
      <Image
        style={styles.logo}
        source={require('../assets/cgi_logo_splash-screen.png')}
      />
      <TextInput
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="white"
        style={styles.formInput}
        onChangeText={(text) => {
          onChangeHandler({email: text});
        }}
      />
      <TextInput
        value={password}
        placeholder="Password"
        placeholderTextColor="white"
        style={styles.formInput}
        secureTextEntry={true}
        onChangeText={(text) => {
          onChangeHandler({password: text});
        }}
      />
      <Text style={styles.text}>Forgot Password?</Text>

      <TouchableOpacity onPress={loginHandler}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.text}>Not Registered? Sign Up!</Text>
        </TouchableOpacity>
      </View>
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

  formInput: {
    width: '80%',
    height: 55,
    alignItems: 'center',
    borderRadius: 40,
    margin: 10,
    paddingLeft: 20,
    borderWidth: 1.5,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'white',
  },
  login: {
    backgroundColor: 'white',
    color: AppColor.PRIMARY_COLOR,
    height: 55,
    width: 300,
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 40,
    margin: 10,
    paddingLeft: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',

    //textAlign: 'center',
  },
});
const mapStateToProps = (state) => ({
  user: state.auth,
});
export default Login;
