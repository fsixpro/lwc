import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import Apicall from './network/ApiCall';
import AppColor from './modules/AppColor';
const apicall = new Apicall();

const Signup = ({navigation}) => {
  const [formInput, setFormInput] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [spinToggle, setSpinToggle] = useState(false);
  const [zone, setZone] = useState('');
  const [church, setChurch] = useState('');
  const [role, setRole] = useState('');
  const [title, setTitle] = useState('');
  const {fullName, email, password} = formInput;
  const onChangeHandler = (text) => {
    setFormInput({...formInput, ...text});
  };
  const registerHandler = async () => {
    const param = {
      name: fullName,
      email: email,
      password: password,
      roleId: 2,
      church: church,
      zchurch: zone,
      title: title,
      mobile: '080',
    };
    if (fullName == '' || email == '' || password == '') {
      return Alert.alert('error', 'please fill in all fields');
    }
    if (zone == '') {
      return Alert.alert('error', 'please select a zone');
    }
    if (church == '') {
      return Alert.alert('error', 'please select a church');
    }
    if (role == '') {
      return Alert.alert('error', 'please select a role');
    }
    if (title == '') {
      return Alert.alert('error', 'please choose a title');
    }
    //   else {
    //     try {
    //       setSpinToggle(true);
    //       const res = await apicall.register(param);
    //       setSpinToggle(false);
    //       if (res.status == 200) {
    //         setSpinToggle(false);
    //         console.log(res.data);
    //         if (res.data.status == false) {
    //           console.log(res.data.errors);
    //           Alert.alert(res.data.errors[0]);
    //         } else {
    //           await AsyncStorage.setItem('username', res.data.data.name);
    //           Alert.alert('Succes', 'registration successful');
    //           navigation.navigate('bottomnav');
    //         }
    //       } else {
    //         setSpinToggle(false);
    //         Alert.alert('error', res.data.message);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
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
        value={fullName}
        placeholder="Full Name"
        placeholderTextColor="white"
        style={styles.formInput}
        onChangeText={(text) => {
          onChangeHandler({fullName: text});
        }}
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

      <View style={styles.dropDownContainer}>
        <Picker
          selectedValue={zone}
          style={styles.dropDown}
          itemStyle={{color: 'white', borderRadius: 40}}
          onValueChange={(value) => {
            setZone(value);
          }}>
          <Picker.Item label="Select Zone" value="" />
          <Picker.Item label="Zone 1" value="Zone1" />
          <Picker.Item label="Zone 2" value="Zone2" />
        </Picker>
      </View>
      <View style={styles.dropDownContainer}>
        <Picker
          selectedValue={church}
          style={styles.dropDown}
          itemStyle={{color: 'white', borderRadius: 40}}
          onValueChange={(value) => {
            setChurch(value);
          }}>
          <Picker.Item label="Select church" value="" />
          <Picker.Item label="church 1" value="church2" />
          <Picker.Item label="church 2" value="church2" />
        </Picker>
      </View>
      <View style={styles.dropDownContainer}>
        <Picker
          selectedValue={role}
          style={styles.dropDown}
          itemStyle={{color: 'white', borderRadius: 40}}
          onValueChange={(value) => {
            setRole(value);
          }}>
          <Picker.Item label="Select Role" value="" />
          <Picker.Item label="role 1" value={1} />
          <Picker.Item label="role 2" value={2} />
          <Picker.Item label="role 3" value={3} />
        </Picker>
      </View>
      <View style={styles.dropDownContainer}>
        <Picker
          selectedValue={title}
          style={styles.dropDown}
          itemStyle={{color: 'white', borderRadius: 40}}
          onValueChange={(value) => {
            setTitle(value);
          }}>
          <Picker.Item label="Choose Your Title" value="" />
          <Picker.Item label="title 1" value="title1" />
          <Picker.Item label="title 2" value="title2" />
        </Picker>
      </View>

      <TouchableOpacity onPress={registerHandler}>
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Text style={styles.text}>Already have an Accont? Login</Text>
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
    marginBottom: 10,
  },
  dropDownContainer: {
    width: '80%',
    height: 45,

    borderRadius: 40,
    margin: 10,
    paddingLeft: 20,
    borderWidth: 1.5,
    borderColor: 'white',
    color: 'white',
    //  fontSize: 15,
  },
  dropDown: {
    color: 'white',
  },
  formInput: {
    width: '80%',
    height: 45,
    borderRadius: 40,
    margin: 5,
    paddingLeft: 20,
    borderWidth: 1.5,
    borderColor: 'white',
    color: 'white',
    fontSize: 15,
  },
  text: {
    color: 'white',
  },
  register: {
    backgroundColor: 'white',
    color: AppColor.PRIMARY_COLOR,
    height: 45,
    width: 300,
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 30,
    margin: 10,
    paddingLeft: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default Signup;
