/**
 * @format
 */
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>
    <App />
  </Provider>
));
