import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import AppColor from '../../modules/AppColor';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
const TestHistory = () => {
  return (
    <View>
      <FlatList
        data={[
          {
            key: '1',
            icon: 'user-graduate',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: '75%',
            date: '07- Aug-2020 | ',
            attepmt: '7 out of 10',
            title: 'Developing your spirit in \nchrist',
          },

          {
            key: '2',
            icon: 'user-graduate',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: '75%',
            date: '07- Aug-2020 | ',
            attepmt: '7 out of 10',
            title: 'Developing your spirit in \nchrist',
          },
          {
            key: '3',
            icon: 'user-graduate',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: '75%',
            date: '07- Aug-2020 | ',
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
              flexDirection: 'row',
              backgroundColor: AppColor.WHITE,
              justifyContent: 'center',
              height: 100,
              alignItems: 'center',
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <View style={{marginRight: 10}}>
              <Icons
                name={item.icon}
                size={40}
                color={AppColor.SECONDARY_COLOR}
              />
            </View>
            <View>
              <Text>{item.title}</Text>
              <Text style={{color: AppColor.SECONDARY_COLOR}}>
                {item.date}
                <Text style={{color: AppColor.SECONDARY_COLOR}}>
                  {item.attepmt}
                </Text>
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  justifyContent: 'center',
                  width: 60,
                  height: 60,
                  fontSize: 14,
                  backgroundColor: item.buttonColor,
                  color: '#fff',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  borderRadius: 100,

                  marginLeft: 25,
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

export default TestHistory;
