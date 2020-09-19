import React from 'react';
import {View, Text, TextInput, ScrollView, FlatList} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AppColor from '../modules/AppColor';

const VideoPlayerScreen = ({VideoURI}) => {
  return (
    <View>
      <View style={{height: '35%'}}>
        <VideoPlayer
          seekColor={AppColor.PRIMARY_COLOR}
          disableVolume={true}
          disableFullscreen={true}
          paused={true}
          controls={true}
          // source={{
          //   uri: VideoURI.video_file,
          // }}
        />
      </View>
      <View>
        <Text>{VideoURI.topic}</Text>
        <Text>{VideoURI.facilitator}</Text>
        <Text>{'Category Remedial'}</Text>
        <Text>{`Synopsis \n${VideoURI.description}`}</Text>
        <Text>{'Comments (5)'}</Text>
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
            <TextInput placeholder="Add a comment" />
          </View>
        </View>
      </View>
      <View style={{height: '33%'}}>
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
                name="account-circle"
                size={40}
                color={AppColor.SECONDARY_COLOR}
              />
              <View>
                <Text style={{fontWeight: 'bold', color: AppColor.BLACK}}>
                  {`Anonymous User  `}
                  <Text style={{fontSize: 10, color: AppColor.SECONDARY_COLOR}}>
                    2 days ago
                  </Text>
                </Text>
                <Text>{item.text}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default VideoPlayerScreen;
