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
import {useFocusEffect} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import AppColor from '../modules/AppColor';
import Header from '../Header';
import {getCourse} from '../statemanagement/actions/courseAction';

const DashBoard = ({getCourse, user, courses}) => {
  const [name, setName] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setName(user.user.name);
      return () => {
        setName('');
      };
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      getCourse();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  return (
    <View style={{flex: 1}}>
      <Header title="Dashboard" />
      <Text
        style={{
          fontWeight: '800',
          fontSize: 20,
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 20,
        }}>
        Hello, {name}
      </Text>
      <Text style={{paddingLeft: 20}}>COMPLETED COURSES</Text>
      {courses.loading ? (
        <TouchableOpacity>
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
              // source={require('../../assets/test.jpg')}
            />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{
                color: AppColor.PRIMARY_COLOR,
                fontWeight: 'bold',
                fontSize: 10,
                marginTop: 5,
              }}></Text>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 5,
              }}></Text>
            <Text
              style={{
                color: '#808080',

                fontSize: 13,
                marginTop: 5,
              }}></Text>
          </View>
        </TouchableOpacity>
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={courses.courses}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                console.log(item.id.toString());
              }}>
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
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={{
                    color: AppColor.PRIMARY_COLOR,
                    fontWeight: 'bold',
                    fontSize: 10,
                    marginTop: 5,
                  }}>
                  {item.course_title}
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
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

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
            title: 'Know Your Cells (KYC)',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: 'FREE',
            format: 'DOCX | ',
            price: '$10.00',
          },

          {
            key: '3',
            icon: 'file-pdf',
            title: 'Know Your Cells (KYC)',
            buttonColor: '#9b9c9e',
            buttonText: 'N/A',
            format: 'PDF | ',
            price: '$0.00',
          },
        ]}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              width: '95%',
              marginBottom: 10,
              borderRadius: 40,
              flexDirection: 'row',
              backgroundColor: '#fff',
              justifyContent: 'space-evenly',
              height: 65,
              alignItems: 'center',
              // paddingLeft: 15,
              marginHorizontal: 10,
              //alignContent: 'space-between',
            }}>
            <Icons
              name={item.icon}
              size={20}
              color={AppColor.SECONDARY_COLOR}
            />
            <View
            //style={{paddingLeft: 12}}
            >
              <Text>{item.title}</Text>
              <Text style={{color: '#9b9c9e'}}>
                {item.format}
                <Text style={{color: AppColor.PRIMARY_COLOR}}>
                  {item.price}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log(item.key);
              }}>
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
const mapStateToProps = (state) => ({
  user: state.auth,
  courses: state.courses,
});
export default connect(mapStateToProps, {getCourse})(DashBoard);
