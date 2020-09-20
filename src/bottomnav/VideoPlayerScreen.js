import React from 'react';
import {View, Text, TextInput, ScrollView, FlatList} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AppColor from '../modules/AppColor';

const VideoPlayerScreen = ({VideoURI, onBack}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 300}}>
        <VideoPlayer
          seekColor={AppColor.PRIMARY_COLOR}
          disableVolume={true}
          disableFullscreen={true}
          onBack={onBack}
          controls={true}
          source={{
            uri: VideoURI.video_file,
          }}
        />
      </View>
      <View>
        <Text style={{marginLeft: 10}}>{VideoURI.topic}</Text>
        <Text style={{marginLeft: 10, color: AppColor.SECONDARY_COLOR}}>
          {VideoURI.facilitator}
        </Text>
        <Text style={{marginLeft: 10, color: AppColor.SECONDARY_COLOR}}>
          {'Category Remedial'}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            color: AppColor.SECONDARY_COLOR,
          }}>{`Synopsis \n${VideoURI.description}`}</Text>
        <Text style={{marginLeft: 10}}>{'Comments (6)'}</Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 3,
              borderColor: AppColor.SECONDARY_COLOR,
              marginVertical: 4,
            }}>
            <Icon
              style={{marginHorizontal: 15}}
              name="account-circle"
              size={25}
              color={AppColor.SECONDARY_COLOR}
            />
            <TextInput style={{width: '100%'}} placeholder="Add a comment" />
          </View>
        </View>
      </View>

      <FlatList
        data={[
          {
            id: '1',
            text:
              "Wow wow wowww!! I have been soooo blessed watching this video. God's Word will NEVER EVER be defeated!",
          },
          {
            id: '2',
            text:
              "Wow wow wowww!! I have been soooo blessed watching this video. God's Word will NEVER EVER be defeated!",
          },
          {
            id: '3',
            text:
              "Wow wow wowww!! I have been soooo blessed watching this video. God's Word will NEVER EVER be defeated!",
          },
          {
            id: '4',
            text:
              "Wow wow wowww!! I have been soooo blessed watching this video. God's Word will NEVER EVER be defeated!",
          },
          {
            id: '5',
            text:
              "Wow wow wowww!! I have been soooo blessed watching this video. God's Word will NEVER EVER be defeated!",
          },
          {
            id: '6',
            text:
              "Wow wow wowww!! I have been soooo blessed watching this video. God's Word will NEVER EVER be defeated!",
          },
        ]}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: AppColor.SECONDARY_COLOR,
            }}>
            <Icon
              style={{marginHorizontal: 10}}
              name="account-circle"
              size={40}
              color={AppColor.SECONDARY_COLOR}
            />
            <View style={{marginHorizontal: 10, width: '80%'}}>
              <Text style={{fontWeight: 'bold', color: AppColor.BLACK}}>
                {`Anonymous User  `}
                <Text
                  style={{
                    fontSize: 10,
                    color: AppColor.SECONDARY_COLOR,
                  }}>{`${item.id} days ago`}</Text>
              </Text>
              <Text>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default VideoPlayerScreen;
