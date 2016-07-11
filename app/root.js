/**
 * Created by zhoubo on 16/7/11.
 */

import React from 'react';
import {Provider} from 'react-redux';
import App from './pages/app';
import configureStore from './store/configure-store';

const store = configureStore();

class Root extends React.Component {

    render(){
        return(
            <Provider store={store} >
                <App/>
            </Provider>
        );
    }
}

export default Root;