import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import {} from 'react-native-gesture-handler';

const DashBoard = ({navigation}) => {
  const [videoList, setVideoList] = useState([
    {
      title: 'first video',
      videoUri:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      key: '1',
    },
    {
      title: 'second video',
      videoUri:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      key: '2',
    },
    {
      title: 'third video',
      videoUri:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      key: '3',
    },
    {
      title: 'fourth video',
      videoUri:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      key: '4',
    },
  ]);
  const [videoIndex, setVideoIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#005EE3',
          height: 80,
        }}>
        <Image
          resizeMode="center"
          style={{height: 60, top: 8, right: 20}}
          source={require('../../assets/cgi_logo_splash-screen.png')}
        />
        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: 20,
            right: 50,
            top: 30,
          }}>
          Dashboard
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '800',
          fontSize: 20,
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 10,
        }}>
        Hello, Bro XYZoe
      </Text>
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
          //borderWidth: 1,
        }}>
        <Video
          controls={true}
          source={{
            uri: videoList[videoIndex].videoUri,
          }}
          onLoad={() => console.log('loading...')}
          onError={(err) => console.log(err.error)}
          style={{flex: 1}}
          fullscreen={true}
        />
      </View>

      <FlatList
        style={{flex: 0.5}}
        data={videoList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setVideoIndex(item.key - 1)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}>
        <Text style={{fontSize: 25, left: 10, bottom: 10}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginTop: 24,
    backgroundColor: '#005EE3',
    width: '60%',
    paddingLeft: 20,
    color: '#fff',
  },
});
export default DashBoard;
