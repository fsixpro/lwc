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

const Login = ({navigation}) => {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  const {email, password} = formInput;
  const onChangeHandler = (text) => {
    setFormInput({...formInput, ...text});
  };
  const loginHandler = () => {
    if (email == '' || password == '') {
      Alert.alert('Error', 'input email and password');
    } else if (
      (email == 'admin' && password == 'admin') ||
      (email == 'Admin' && password == 'admin')
    ) {
      navigation.navigate('bottomnav');
    } else {
      Alert.alert('Error', 'invalid email or password');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/cgi_logo_splash-screen.png')}
      />
      <TextInput
        value={email}
        placeholder="Email"
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
    backgroundColor: '#005EE3',
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
    color: '#005EE3',
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
export default Login;
