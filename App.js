import React from 'react';
import {Provider} from 'react-redux';
import store from './src/statemanagement/store';
import MyStack from './src/stackscreen/MyStack';

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
