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
    StyleSheet
} from 'react-native';

import HomeIndex from '../home/HomeIndex';
import NewsComponent from '../home/NewsComponent';

export default class LeftDrawerMenu extends Component {

    constructor(props){
        super(props);

        this.state = {
             menuTag : 'menu1',
        }
    }

    _getMainView(){

        switch (this.state.menuTag){

            case 'menu1':
                return <HomeIndex navigator={this.props.navigator}/>;
            case 'menu2':
                return <NewsComponent/>;
        }
    }

    _processItemClick(menuTag){

        this.drawer.closeDrawer();
        this.setState({menuTag});
    }

    render() {

        var navigationView = (

            <View style={styles.navigationView}>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{flex: 1}} source={require('./header.png')} resizeMode={Image.resizeMode.contain}/>
                    <Text style={{flex: 5, }} >kisstherain007</Text>
                </View>

                <View style={{flex: 3,}}>

                    <TouchableHighlight style={styles.leftMenuStyle} onPress={()=>this._processItemClick('menu1')}>

                        <Text>新闻1</Text>

                    </TouchableHighlight>

                    <TouchableHighlight  style={styles.leftMenuStyle} onPress={()=>this._processItemClick('menu2')}>

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

                    {this._getMainView()}

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
    }
});
