/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
StatusBar,
} from 'react-native';
import LeftDrawerMenu from './app/component/drawerMenu/LeftDrawerMenu.js';

class NewsAPP_RN extends Component {

  render() {

    return (

      <View style={styles.container}>

        <StatusBar backgroundColor={'red'} />

        <LeftDrawerMenu/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NewsAPP_RN', () => NewsAPP_RN);
