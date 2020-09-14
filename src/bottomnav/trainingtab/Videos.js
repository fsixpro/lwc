import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import AppColor from '../../modules/AppColor';
import {getTraining} from '../../statemanagement/actions/trainingAction';
import {connect} from 'react-redux';
const Videos = ({getTraining, training}) => {
  useEffect(() => {
    getTraining();
  }, []);

  return (
    <View>
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
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../../assets/videoarrow.png')}
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
});
export default connect(mapStateToProps, {getTraining})(Videos);
