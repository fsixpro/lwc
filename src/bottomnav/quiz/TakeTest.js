import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import AppColor from '../../modules/AppColor';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';

const TakeTest = () => {
  return (
    <View>
      <FlatList
        data={[
          {
            key: '1',
            icon: 'user-graduate',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: 'Begin Test!',
            time: '10 minutes',
            attepmt: '7 out of 10',
            title: 'Developing your spirit in \nchrist',
          },

          {
            key: '2',
            icon: 'user-graduate',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: 'Begin Test!',
            time: '10 minutes',
            attepmt: '7 out of 10',
            title: 'Developing your spirit in \nchrist',
          },
        ]}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              width: '95%',
              marginBottom: 10,
              borderRadius: 20,
              backgroundColor: '#fff',
              justifyContent: 'space-evenly',
              height: 230,
              alignItems: 'center',
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 40,
                alignItems: 'center',
              }}>
              <Icons
                name={item.icon}
                size={45}
                color={AppColor.SECONDARY_COLOR}
              />
              <View style={{marginHorizontal: 20}}>
                <Text style={{color: AppColor.PRIMARY_COLOR}}>{item.time}</Text>
                <Text style={{color: AppColor.BLACK, fontSize: 16}}>
                  {item.title}
                </Text>
              </View>
            </View>
            <Text style={{color: AppColor.SECONDARY_COLOR, fontSize: 14}}>
              {'This is an online training for CGI Liaison \nManagers'}
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  width: 310,
                  height: 50,
                  fontSize: 14,
                  backgroundColor: item.buttonColor,
                  color: AppColor.WHITE,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  borderRadius: 100,
                }}>
                {item.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TakeTest;
