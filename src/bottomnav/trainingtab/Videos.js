import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import AppColor from '../../modules/AppColor';
const Videos = () => {
  return (
    <View>
      <FlatList
        data={[
          {
            key: '1',
            title: 'Raising Leadership and multiplying your Church attendance',
            pastor: 'Pastor Vale Odu-Thomas',
            skill: 'Up-Skills |',
            price: '$100.00',
          },
          {
            key: '2',
            title: 'Cell Leaders materclass - Raise yourself',
            pastor: 'Pastor Vale Odu-Thomas',
            skill: 'Remedial |',
            price: 'Free',
          },
          {
            key: '3',
            title: 'Raising Leadership and multiplying your Church attendance',
            pastor: 'Pastor Vale Odu-Thomas',

            skill: 'Up-Skills |',
            price: '$100.00',
          },
          {
            key: '4',
            title: 'Cell Leaders materclass - Raise yourself',
            pastor: 'Pastor Vale Odu-Thomas',
            skill: 'Remedial |',
            price: 'Free',
          },
          {
            key: '5',
            title: 'Raising Leadership and multiplying your Church attendance',
            pastor: 'Pastor Vale Odu-Thomas',
            skill: 'Up-Skills |',
            price: '$100.00',
          },
        ]}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                console.log('this is the title', item.title.length);
              }}>
              <Image
                style={{width: 100, height: 100, marginTop: 10}}
                source={require('../../../assets/videoarrow.png')}
              />
            </TouchableOpacity>
            <View style={{top: 10, marginHorizontal: 7}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
              <Text style={{color: AppColor.SECONDARY_COLOR}}>
                {item.pastor}
              </Text>
              <Text style={{color: AppColor.SECONDARY_COLOR}}>
                {`4:43 | ${item.skill} `}
                <Text style={{color: AppColor.PRIMARY_COLOR}}>
                  {item.price}
                </Text>
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Videos;
