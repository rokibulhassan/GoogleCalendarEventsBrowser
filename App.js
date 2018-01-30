/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import { Provider } from 'react-redux';

import { createReduxStore } from './Redux';
import Navigator from './Navigation';

const store = createReduxStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
