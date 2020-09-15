import React, {useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/dist/FontAwesome5';
import AppColor from '../modules/AppColor';
import Header from '../Header';
import {getTools} from '../statemanagement/actions/toolsAction';

const ToolsHome = ({getTools, tools}) => {
  useEffect(() => {
    getTools();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header title="Tools" />
      <Text style={{margin: 15}}>Simple Tools Church Growth</Text>
      <View style={{flex: 1}}>
        {tools !== null && (
          <FlatList
            keyExtractor={(item) => item.sid.toString()}
            data={tools}
            renderItem={({item}) => (
              <View
                style={{
                  //  flex: 1,
                  width: '95%',
                  marginTop: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  backgroundColor: AppColor.WHITE,
                  justifyContent: 'space-evenly',
                  height: 65,
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <Icons
                  name={`file-${item.stcg_format.toLowerCase()}`}
                  size={25}
                  color="#9b9c9e"
                />
                <View>
                  <Text style={{width: 170, fontSize: 13}} numberOfLines={2}>
                    {item.stcg_desc}
                  </Text>
                  <Text style={{color: '#9b9c9e'}}>
                    {`${item.stcg_format} | `}
                    <Text style={{color: AppColor.PRIMARY_COLOR}}>
                      {item.stcg_price}
                    </Text>
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={item.stcg_price == '0.00' ? () => {} : null}>
                  <Text
                    style={{
                      backgroundColor:
                        item.stcg_price == '0.00'
                          ? AppColor.PRIMARY_COLOR
                          : AppColor.SECONDARY_COLOR,
                      color: '#fff',
                      width: 75,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      borderRadius: 40,
                      height: 40,
                      marginLeft: 25,
                    }}>
                    {item.stcg_price == '0.00' ? 'FREE' : 'N/A'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  tools: state.tools.tools.data,
});
export default connect(mapStateToProps, {getTools})(ToolsHome);
