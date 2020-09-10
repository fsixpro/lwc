import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import AppColor from '../modules/AppColor';
import Header from '../Header';
const Tools = () => {
  return (
    <View>
      <Header title="Tools" />
      <Text style={{margin: 15}}>Simple Tools Church Growth</Text>
      <FlatList
        data={[
          {
            key: '1',
            icon: 'file-alt',
            buttonColor: AppColor.PRIMARY_COLOR,
            buttonText: 'FREE',
            format: 'DOCX | ',
            price: '$0.00',
            title: 'Know Your Cells (KYC)',
          },

          {
            key: '2',
            icon: 'file-pdf',
            buttonColor: '#9b9c9e',
            buttonText: 'N/A',
            format: 'PDF | ',
            price: '$10.00',
            title: 'Join The Chariot Worship',
          },
          {
            key: '3',
            icon: 'file-pdf',
            buttonColor: '#9b9c9e',
            buttonText: 'N/A',
            format: 'PDF | ',
            price: '$10.00',
            title: 'Post Program Consolid...',
          },
          {
            key: '4',
            icon: 'file-pdf',
            buttonColor: '#9b9c9e',
            buttonText: 'N/A',
            format: 'PDF | ',
            price: '$0.00',
            title: '3 in 1 Church invitation...',
          },
          {
            key: '5',
            icon: 'file-pdf',
            buttonColor: '#9b9c9e',
            buttonText: 'N/A',
            format: 'PDF | ',
            price: '$10.00',
            title: 'Know Your Cells (KYC)',
          },
          {
            key: '6',
            icon: 'file-pdf',
            buttonColor: '#9b9c9e',
            buttonText: 'N/A',
            format: 'PDF | ',
            price: '$0.00',
            title: 'Know Your Cells (KYC)',
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

              marginHorizontal: 10,
            }}>
            <Icons name={item.icon} size={20} color="#9b9c9e" />
            <View>
              <Text>{item.title}</Text>
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
    </View>
  );
};

export default Tools;
