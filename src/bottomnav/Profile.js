import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import AppColor from '../modules/AppColor';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import Header from '../Header';
import {logout} from '../statemanagement/actions/authAction';

const Profile = ({navigation, user}) => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(logout());
    } catch (e) {
      // clear error
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Profile" />
      <View
        style={{
          margin: 7,
          backgroundColor: AppColor.WHITE,
          borderRadius: 10,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flex: 0.35,
        }}>
        <Image
          style={{height: 70, width: 70}}
          source={require('../../assets/cgi_logo_splash-screen.png')}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 25}}>{user?.user?.name}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Icons
              name="pencil-alt"
              size={20}
              color={AppColor.SECONDARY_COLOR}
              style={{}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{color: AppColor.SECONDARY_COLOR, fontSize: 11}}>
          {`${user?.user?.email} | `}
          <Text style={{color: AppColor.PRIMARY_COLOR, fontWeight: 'bold'}}>
            Cell Ministry Leader
          </Text>
        </Text>
      </View>
      <View
        style={{
          flex: 0.65,
          backgroundColor: AppColor.WHITE,
          margin: 7,
        }}>
        <View
          style={{
            flex: 0.2,
            borderBottomWidth: 0.5,
            marginVertical: 10,
            justifyContent: 'space-around',
          }}>
          <Text style={{marginLeft: 15, fontSize: 20}}>Settings</Text>
        </View>
        <View
          style={{
            flex: 0.8,
            justifyContent: 'space-around',
            marginLeft: 15,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', width: 150}}
            onPress={() => {}}>
            <Icons name="bell" size={25} color={AppColor.SECONDARY_COLOR} />
            <Text style={{marginLeft: 30}}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', width: 150}}
            onPress={() => {}}>
            <Icons name="edit" size={25} color={AppColor.SECONDARY_COLOR} />
            <Text style={{marginLeft: 30}}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', width: 150}}
            onPress={() => {}}>
            <Icons
              name="info-circle"
              size={25}
              color={AppColor.SECONDARY_COLOR}
            />
            <Text style={{marginLeft: 30}}>About LW CGI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', width: 150}}
            onPress={logoutHandler}>
            <Icons
              name="sign-out-alt"
              size={25}
              color={AppColor.SECONDARY_COLOR}
            />
            <Text style={{marginLeft: 30}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth,
});
export default connect(mapStateToProps, {logout})(Profile);
