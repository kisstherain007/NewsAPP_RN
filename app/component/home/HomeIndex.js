/**
 * Created by zhoubo on 16/6/30.
 */
import React, {Component} from 'react';
import {
    ListView,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    ToastAndroid,
    Image,
    View
} from 'react-native';

export default class extends Component {

    constructor(props){
        super(props);

        this.state = {
            error: false,
            loadingStr : 'isLoading',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            isLoading : true
        };
    }

    componentDidMount() {

        this._getRowsFromNet();
    }

    _getRowsFromNet(){

        fetch("http://apis.baidu.com/txapi/social/social?num=30&page=1", {
            method: 'get',
            headers: {
                'apikey': '6985deb9bf0d32ca8ef5451622e1fcc6',
            },
        })
            .then((response) => response.json())
            .then((responseText) => {
                console.log(responseText);
                console.log(responseText.newslist.toString());
                this.setState({
                    isLoading: false,
                    dataSource : this.state.dataSource.cloneWithRows(responseText.newslist)
                });
            })
            .catch((error) => {
                console.warn(error);
            })
            .done();
    }

    _renderRow(rowData){

        var loader = this.state.isLoading ? <Text>{this.state.loadingStr}</Text> : null;

        return (

            <TouchableOpacity style={styles.rowsStyle} onPress={() => {this._pressRow(rowData)}}>

                <Text style={styles.rowTextStyle}>{rowData.title}</Text>

                {this.state.error ?

                    <Text>{this.state.error}</Text> :

                    <Image
                        source={{uri: rowData.picUrl}} style={{height: 100, width:150, alignSelf:'center'}}
                        resizeMode={Image.resizeMode.contain}
                        onError={(e)=>{this.setState({isLoading: false, error: e.nativeEvent.error})}}>
                        {loader}
                    </Image>
                }

                <Text style={styles.rowTextStyle}>{rowData.description}</Text>

            </TouchableOpacity>
        );
    }

    _pressRow(rowData) {

        this.props.navigator.push({id: "web"});
    }

    render(){

        return (

            <ListView dataSource={this.state.dataSource}
                      renderRow={this._renderRow.bind(this)}
            />
        );
    };
}

const styles = StyleSheet.create({

    navigationView: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center'
    },

    rowsStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        justifyContent: 'center',
    },

    rowTextStyle: {
        margin: 10,
    }
});