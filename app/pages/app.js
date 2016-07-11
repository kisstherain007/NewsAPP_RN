/**
 * Created by zhoubo on 16/7/11.
 */
import React from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import {fetchTypes} from '../actions/executeQuest';

export default class App extends React.Component {

    componentDidMount(){
        console.log(this.props);
        this.props.dispatch(fetchTypes());
    }

    render(){
        return (
            <Text>{this.props.request.word}</Text>
        );
    }
}

function mapStateToProps(state) {
    const { request } = state;
    return {
        request
    };
}

export default connect(mapStateToProps)(App);