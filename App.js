import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import store from './src/statemanagement/store';
import MyStack from './src/stackscreen/MyStack';
import AppColor from './src/modules/AppColor';
import {loadUser} from './src/statemanagement/actions/authAction';

const App = () => {
  StatusBar.setBackgroundColor(AppColor.PRIMARY_COLOR);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
