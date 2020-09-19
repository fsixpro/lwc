import React from 'react';
import {View, Text, TextInput, ScrollView, FlatList} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AppColor from '../modules/AppColor';

const VideoPlayerScreen = ({VideoURI}) => {
  return (
    <View style={{flex: 1}}>
      <VideoPlayer
        style={{height: 300}}
        paused={true}
        controls={true}
        // source={{
        //   uri: VideoURI.video_file,
        // }}
      />
      <View>
        <Text>{VideoURI.topic}</Text>
        <Text>{VideoURI.facilitator}</Text>
        <Text>{'Category Remedial'}</Text>
        <Text>{`Synopsis \n${VideoURI.description}`}</Text>
        <View>
          <Text>{'Comments (5)'}</Text>
          <View>
            <TextInput placeholder="Add a comment" />
          </View>
        </View>
        <View style={{backgroundColor: 'powderblue', height: 250}}>
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
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="account-circle"
                  size={30}
                  color={AppColor.SECONDARY_COLOR}
                />
                <View>
                  <Text>
                    {`Anonymous User`}
                    <Text>2 days ago</Text>
                  </Text>
                  <Text>{item.text}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default VideoPlayerScreen;
