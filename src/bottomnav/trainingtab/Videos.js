import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {getTraining} from '../../statemanagement/actions/trainingAction';
import {connect} from 'react-redux';
import AppColor from '../../modules/AppColor';
import VideoPlayerScreen from '../VideoPlayerScreen';
import {getVideo} from '../../statemanagement/actions/videoAction';
import {getVideoComment} from '../../statemanagement/actions/commentAction';
const Videos = ({getTraining, training, getVideo, video, getVideoComment}) => {
  useEffect(() => {
    getTraining();
  }, []);
  const [modal, setModal] = useState(false);
  const videoHandler = (item) => {
    getVideo({train_ram: item.train_ram});
    getVideoComment({training_id: item.train_ram});
    setModal(true);
  };
  const onBack = () => {
    setModal(false);
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}>
        <VideoPlayerScreen VideoURI={video} onBack={onBack} />
      </Modal>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={training.training}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => videoHandler(item)}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: AppColor.WHITE,
                marginTop: 5,
                borderBottomWidth: 10,
                borderBottomColor: AppColor.WHITE,
              }}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../../assets/videoarrow.png')}
              />

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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  training: state.training,
  video: state.video,
});
export default connect(mapStateToProps, {
  getTraining,
  getVideo,
  getVideoComment,
})(Videos);
