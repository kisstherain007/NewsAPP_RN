/**
 * Created by zhoubo on 16/6/26.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    DrawerLayoutAndroid,
    StyleSheet
} from 'react-native';

export default class LeftDrawerMenu extends Component {

    render() {

        var navigationView = (

            <View style={styles.navigationView}>

                <Image style={{backgroundColor: 'red'}} source={require('./header.png')}/>

            </View>

        );

        return (

            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView} >

                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

                    <Text> main home </Text>

                </View>

            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({

    navigationView: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center'
    },
});