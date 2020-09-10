import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import AppColor from '../../modules/AppColor';
const Webinars = () => {
  return (
    <View>
      <FlatList
        data={[
          {
            key: '1',
            title: 'New Church cordinators training \nprogram',
            quantity: 3,
          },
          {
            key: '2',
            title:
              'New Church cordinators training \nprogram for the excellent mind',
            quantity: 5,
          },
          {
            key: '3',
            title: 'New Church cordinators training \nprogram',
            quantity: 3,
          },
          {
            key: '4',
            title:
              'New Church cordinators training \nprogram for the excellent mind',
            quantity: 5,
          },
        ]}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: AppColor.WHITE,
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../../assets/test.jpg')}
              />
            </TouchableOpacity>
            <View
              style={{top: 10, marginHorizontal: 7, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>

              <Text
                style={{
                  color: AppColor.PRIMARY_COLOR,
                }}>{`${item.quantity} Course videos`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Webinars;
