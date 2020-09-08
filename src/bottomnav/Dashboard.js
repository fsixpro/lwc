import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-community/async-storage';
import AppColor from '../modules/AppColor';

const DashBoard = ({route, navigation}) => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    async function getData() {
      try {
        const value = await AsyncStorage.getItem('username');
        if (value !== null) {
          setUsername(value);
        }
      } catch (e) {
        // error reading value
      }
    }
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: AppColor.PRIMARY_COLOR,
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
          Dashboard
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '800',
          fontSize: 20,
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 20,
        }}>
        Hello, {username}
      </Text>
      <Text style={{paddingLeft: 20}}>COMPLETED COURSES</Text>
      <FlatList
        data={[
          {key: '1', value: 'text'},
          {key: '2', value: 'text'},
          {key: '3', value: 'text'},
        ]}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                backgroundColor: '#fff',
                //   borderColor: 'grey',
                paddingLeft: 10,
                // borderWidth: 5,
                borderRadius: 20,
                marginLeft: 15,
                width: 225,
                height: 250,
                overflow: 'hidden',
              }}>
              <Image
                style={{
                  width: 255,
                  height: 115,
                  resizeMode: 'stretch',
                  left: -10,
                }}
                source={require('../../assets/test.jpg')}
              />
              <Text
                style={{
                  color: AppColor.PRIMARY_COLOR,
                  fontWeight: 'bold',
                  fontSize: 10,
                  marginTop: 5,
                }}>
                CGI LIAISON MANAGERS TRA...
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 5,
                }}>
                Tier 1 Training
              </Text>
              <Text
                style={{
                  color: '#808080',

                  fontSize: 13,
                  marginTop: 5,
                }}>
                This is an online training for CGI Liaison Manager
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text
        style={{
          color: '#9b9c9e',
          fontWeight: 'bold',
          paddingLeft: 20,
          top: -10,
        }}>
        Downloaded Tools
      </Text>
      <FlatList
        data={[
          {
            key: '1',
            icon: 'file-alt',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: 'FREE',
            format: 'DOCX | ',
            price: '$10.00',
          },

          {
            key: '3',
            icon: 'file-pdf',
            buttonColor: '#9b9c9e',
            buttonText: 'N/A',
            format: 'PDF | ',
            price: '$0.00',
          },
        ]}
        renderItem={({item}) => (
          <View
            style={{
              width: '95%',
              marginBottom: 10,
              borderRadius: 40,
              flexDirection: 'row',
              backgroundColor: '#fff',
              height: 65,
              alignItems: 'center',
              paddingLeft: 15,
              marginHorizontal: 10,
            }}>
            <Icons name={item.icon} size={20} color="#9b9c9e" />
            <View style={{paddingLeft: 12}}>
              <Text>{'Know Your Cells (KYC)'}</Text>
              <Text style={{color: '#9b9c9e'}}>
                {item.format}
                <Text style={{color: AppColor.PRIMARY_COLOR}}>
                  {item.price}
                </Text>
              </Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  backgroundColor: item.buttonColor,
                  color: '#fff',
                  width: 75,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  borderRadius: 40,
                  height: 40,
                  marginLeft: 25,
                }}>
                {item.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/*  
      <View
        style={{
          height: 30,
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
          //borderWidth: 1,
        }}>
        <Video
          controls={true}
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          paused={true}
          onError={(err) => console.log(err.error)}
          style={{flex: 0.5}}
          fullscreen={true}
        />
      </View>
      {/*   <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}>
        <Text style={{fontSize: 25, left: 10, bottom: 10}}>Logout</Text>
      </TouchableOpacity>
      */}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginTop: 24,
    backgroundColor: AppColor.PRIMARY_COLOR,
    width: '60%',
    paddingLeft: 20,
    color: '#fff',
  },
});

export default DashBoard;
