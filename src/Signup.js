import React, {useState, useCallback, useEffect, useRef} from 'react';
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
import {useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getZone} from './statemanagement/actions/zoneAction';
import {getChurch} from './statemanagement/actions/churchAction';
import {Picker} from '@react-native-community/picker';
import AppColor from './modules/AppColor';
import {register} from './statemanagement/actions/authAction';
const Signup = ({
  navigation,
  getZone,
  zones,
  getChurch,
  churches,
  register,
  user,
}) => {
  const isInitialMount = useRef(true);
  useFocusEffect(
    useCallback(() => {
      getZone();
      return () => {};
    }, []),
  );

  const [formInput, setFormInput] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });

  const [zone, setZone] = useState('');
  const [church, setChurch] = useState('');
  const [title, setTitle] = useState('');
  const {fullName, email, password, phone} = formInput;
  const onChangeHandler = (text) => {
    setFormInput({...formInput, ...text});
  };
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getChurch(zone);
    }
  }, [zone]);
  const registerHandler = async () => {
    const param = {
      name: fullName,
      email: email,
      password: password,
      church: church,
      zchurch: zone,
      title: title,
      mobile: phone,
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
    if (title == '') {
      return Alert.alert('error', 'please choose a title');
    }
    register(param);
    if (user.isLooged) {
      // navigation.navigate('bottomnav');
    }
  };
  return (
    <View style={styles.container}>
      <Spinner
        visible={user.loading}
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
        keyboardType={'email-address'}
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
      <TextInput
        value={phone}
        placeholder="phone"
        placeholderTextColor="white"
        style={styles.formInput}
        keyboardType={'number-pad'}
        onChangeText={(text) => {
          onChangeHandler({phone: text});
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
          {zones != null &&
            zones.length > 1 &&
            zones.map((zone, index) => (
              <Picker.Item
                key={index}
                label={zone.description}
                value={zone.zone_id}
              />
            ))}
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
          {churches != null &&
            churches.length > 1 &&
            churches.map((church, index) => (
              <Picker.Item
                key={index}
                label={church.church_desc}
                value={church.cgroupID}
              />
            ))}
          {/* <Picker.Item label="church 1" value="church2" />
          <Picker.Item label="church 2" value="church2" /> */}
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
          <Picker.Item label="Brother" value="Brother" />
          <Picker.Item label="Sister" value="Sister" />
          <Picker.Item label="Deacon" value="Deacon" />
          <Picker.Item label="Deaconess" value="Deaconess" />
          <Picker.Item label="Pastor" value="Pastor" />
        </Picker>
      </View>

      <TouchableOpacity onPress={registerHandler}>
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            // navigation.goBack();
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
    overflow: 'scroll',
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

const mapStateToProps = (state) => ({
  zones: state.zone.zones,
  churches: state.church.churches.data,
  user: state.auth,
});
export default connect(mapStateToProps, {register, getZone, getChurch})(Signup);
