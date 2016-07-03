/**
 * Created by zhoubo on 16/7/3.
 */
import React, {Component} from 'react';
import {WebView} from 'react-native';

var WEBVIEW_REF = 'webview';

export default class WebViewComponent extends Component{

    render(){

        return(

            <WebView
                ref={WEBVIEW_REF}
                automaticallyAdjustContentInsets={false}
                source={{uri: 'http://www.baidu.com'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
            />
        );
    }
}