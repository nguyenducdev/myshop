/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from "./src/components/App.js";

export default class myShop extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('myShop', () => myShop);
