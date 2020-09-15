import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {getTraining} from '../statemanagement/actions/trainingAction';
import {connect} from 'react-redux';
import AppColor from '../modules/AppColor';
import Header from '../Header';
import VideoPlayerScreen from './VideoPlayerScreen';
import {getVideo} from '../statemanagement/actions/videoAction';

const Videos = ({navigation, getTraining, training, getVideo, video}) => {
  useEffect(() => {
    getTraining();
  }, []);
  const [modal, setModal] = useState(false);
  const videoHandler = (item) => {
    getVideo({train_ram: item.train_ram});
    setModal(true);
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}>
        <VideoPlayerScreen VideoURI={video.video_file} />
      </Modal>
      <Header title={'Training'} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={training.training}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: AppColor.WHITE,
              marginTop: 5,
              borderBottomWidth: 10,
              borderBottomColor: AppColor.WHITE,
            }}>
            <TouchableOpacity onPress={() => videoHandler(item)}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../assets/videoarrow.png')}
              />
            </TouchableOpacity>
            <View style={{top: 10, marginHorizontal: 7}}>
              <Text
                ellipsizeMode="clip"
                numberOfLines={2}
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  width: 230,
                }}>
                {item.topic}
              </Text>
              <Text style={{color: AppColor.SECONDARY_COLOR}}>
                {item.facilitator}
              </Text>
              <Text style={{color: AppColor.SECONDARY_COLOR}}>
                {`${item.duration}:00 | ${item.skill} `}
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
const mapStateToProps = (state) => ({
  training: state.training,
  video: state.video,
});
export default connect(mapStateToProps, {getTraining, getVideo})(Videos);
