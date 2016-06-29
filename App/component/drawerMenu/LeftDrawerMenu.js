/**
 * Created by zhoubo on 16/6/26.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    DrawerLayoutAndroid,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    ToastAndroid,
    StyleSheet
} from 'react-native';

export default class LeftDrawerMenu extends Component {

    constructor(props){
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            contentStr : 'isLoading',
            dataSource: ds.cloneWithRows(this._getRows()),
            isLoading : false
        };
    }

    _getRows(){

        var datas = [];

        for (let i = 0; i < 20; i++){

            datas.push('row : ' + i);
        }

        return datas;
    }

    _renderRow(rowData){

        return (

            <TouchableOpacity style={styles.rowsStyle} onPress={() => {this._pressRow(rowData)}}>
                <Text style={styles.rowTextStyle}>{rowData}</Text>
            </TouchableOpacity>
        );
    }

    _pressRow(rowData){

        alert(rowData);
    }

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

                <View style={{flex:1, alignItems: 'stretch', justifyContent: 'flex-start'}}>

                    <ListView dataSource={this.state.dataSource}
                              renderRow={this._renderRow.bind(this)}
                              />

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

    rowsStyle: {
        height: 60,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        justifyContent: 'center',
    },

    rowTextStyle: {
        margin: 10,
    }
});
