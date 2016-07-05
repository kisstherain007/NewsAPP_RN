/**
 * Created by zhoubo on 16/6/26.
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    DrawerLayoutAndroid,
    Text,
    TouchableHighlight,
    StyleSheet,
    Navigator,
    TouchableOpacity
} from 'react-native';

import HomeIndex from '../home/HomeIndex';
import NewsComponent from '../home/NewsComponent';

var _navigator;

export default class LeftDrawerMenu extends Component {

    _getMainView(route, navigator){

        _navigator = navigator;

        switch (route.id){

            case 'main':
                return <HomeIndex navigator={navigator}/>;
            case 'NewsComponent':
                return <NewsComponent/>
        }
    }

    _leftButton(){
        return (
            <TouchableOpacity
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                </Text>
            </TouchableOpacity>
        );
    }

    _rightButton(){
        return (
            <TouchableOpacity
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                </Text>
            </TouchableOpacity>

        );
    }

    _title(){
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>新闻1</Text>
        );}

    _processItemClick(menuTag){

        this.drawer.closeDrawer();

        _navigator.push({id: menuTag});
    }

    render() {

        var navigationView = (

            <View style={styles.navigationView}>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{flex: 1}} source={require('./header.png')} resizeMode={Image.resizeMode.contain}/>
                    <Text style={{flex: 5, }} >kisstherain007</Text>
                </View>

                <View style={{flex: 3,}}>

                    <TouchableHighlight style={styles.leftMenuStyle} onPress={()=>this._processItemClick('main')}>

                        <Text>新闻1</Text>

                    </TouchableHighlight>

                    <TouchableHighlight  style={styles.leftMenuStyle} onPress={()=>this._processItemClick('NewsComponent')}>

                        <Text>新闻2</Text>

                    </TouchableHighlight>

                </View>

            </View>
        );

        return (

            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}
                ref={(drawer) => { this.drawer = drawer; }}>

                <View style={{flex:1, alignItems: 'stretch', justifyContent: 'flex-start'}}>

                    <Navigator
                        style={styles.container}
                        tintColor='#FF6600'
                        initialRoute={{id: 'main'}}
                        renderScene={this._getMainView}
                        navigationBar={
                            <Navigator.NavigationBar
                                routeMapper={{LeftButton: this._leftButton, RightButton: this._rightButton, Title: this._title}}
                                style={{backgroundColor: 'yellow'}}
                            />
                        }/>
                </View>

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({

    navigationView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'stretch'
    },

    leftMenuStyle: {
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        justifyContent: 'center'
    },

    leftMenuTextStyle: {
        fontSize: 20,
        margin: 10,
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
