import React from 'react';
import {View, Text} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const VideoPlayerScreen = ({VideoURI}) => {
  return (
    <View style={{flex: 0.35}}>
      <VideoPlayer
        style={{flex: 1}}
        paused={true}
        controls={true}
        source={{
          uri: VideoURI,
        }}
      />
    </View>
  );
};

export default VideoPlayerScreen;
