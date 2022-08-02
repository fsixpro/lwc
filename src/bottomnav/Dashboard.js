import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Header';
import AppColor from '../modules/AppColor';
import {getCourse} from '../statemanagement/actions/courseAction';
import {getTools} from '../statemanagement/actions/toolsAction';

const DashBoard = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const courses = useSelector((state) => state.courses);
  const tools = useSelector((state) => state.tools.tools.data);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getCourse());
      dispatch(getTools());
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
        Hello, {user?.name}
      </Text>
      <Text style={{paddingLeft: 20}}>COMPLETED COURSES</Text>
      <View>
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
              }}></View>
          </TouchableOpacity>
        ) : (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={courses.courses}
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
      </View>
      <View style={{marginTop: 25, flex: 1}}>
        <Text
          style={{
            color: '#9b9c9e',
            fontWeight: 'bold',
            paddingLeft: 20,
            top: -10,
          }}>
          Downloaded Tools
        </Text>
        {tools !== null && (
          <FlatList
            keyExtractor={(item) => item.sid.toString()}
            data={tools}
            renderItem={({item}) => (
              <View
                style={{
                  //  flex: 1,
                  width: '95%',
                  marginTop: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  backgroundColor: AppColor.WHITE,
                  justifyContent: 'space-evenly',
                  height: 65,
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <Icons
                  name={`file-${item.stcg_format.toLowerCase()}`}
                  size={25}
                  color="#9b9c9e"
                />
                <View>
                  <Text style={{width: 170, fontSize: 13}} numberOfLines={2}>
                    {item.stcg_desc}
                  </Text>
                  <Text style={{color: '#9b9c9e'}}>
                    {`${item.stcg_format} | `}
                    <Text style={{color: AppColor.PRIMARY_COLOR}}>
                      {item.stcg_price}
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={item.stcg_price == '0.00' ? () => {} : null}>
                  <Text
                    style={{
                      backgroundColor:
                        item.stcg_price == '0.00'
                          ? AppColor.PRIMARY_COLOR
                          : AppColor.SECONDARY_COLOR,
                      color: '#fff',
                      width: 75,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      borderRadius: 40,
                      height: 40,
                      marginLeft: 25,
                    }}>
                    {item.stcg_price == '0.00' ? 'FREE' : 'N/A'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
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
