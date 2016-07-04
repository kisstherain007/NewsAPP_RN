/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
    StatusBar,
    BackAndroid,
    TouchableOpacity
} from 'react-native';
import LeftDrawerMenu from './app/component/drawerMenu/LeftDrawerMenu.js';
import WebViewComponent from './app/component/home/WebViewComponent';

var _navigator;

class NewsAPP_RN extends Component {

  componentDidMount() {

    BackAndroid.addEventListener('hardwareBackPress', ()=>{

      if (_navigator.getCurrentRoutes().length === 1  ) {

        return false;
      }
      _navigator.pop();

      return true;
    });
  }

  componentDidUnMount() {

    BackAndroid.removeEventListener();
  }

  _leftButton(){
    return (
        <TouchableOpacity
            style={styles.navBarLeftButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            Back
          </Text>
        </TouchableOpacity>
    );
  }

  _rightButton(){
    return (
        <TouchableOpacity
            style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>
            Next
          </Text>
        </TouchableOpacity>

    );
  }

  _title(){
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>新闻1</Text>
  );}

  render() {

    return (

        <Navigator
            style={styles.container}
            tintColor='#FF6600'
            initialRoute={{id: 'main'}}
            renderScene={this._getMainComponent}
            navigationBar={
              <Navigator.NavigationBar
                  routeMapper={{LeftButton: this._leftButton, RightButton: this._rightButton, Title: this._title}}
                  style={{backgroundColor: 'yellow', justifyContent:'center'}}
              />
            }/>
    );
  }

  _getMainComponent(route, navigator){

    _navigator = navigator;

    switch (route.id){

      case 'main':

        // 偶尔发现 return 后换行发现无法解析,也没有报错 ~~~~~
        return (

            <View style={styles.container}>

              <StatusBar backgroundColor={'red'} />

              <LeftDrawerMenu navigator={navigator}/>

            </View>
        );

      case 'web':

        return (

            <WebViewComponent/>
        );
    }

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
  navButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
});

AppRegistry.registerComponent('NewsAPP_RN', () => NewsAPP_RN);
