import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppColor from '../../modules/AppColor';
const LiveSession = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: AppColor.WHITE,
          height: 250,
          width: '95%',
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: AppColor.BLACK}}>LIVE TRAINING</Text>
        </View>
        <Text style={{color: AppColor.SECONDARY_COLOR}}>
          {
            "No live sessions for now, you will get \nnotification when we're live"
          }
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: AppColor.SECONDARY_COLOR,
              color: AppColor.WHITE,
              width: 320,
              height: 50,
              borderRadius: 30,
              textAlign: 'center',
              textAlignVertical: 'center',
              top: 50,
            }}>
            Go Live!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LiveSession;
