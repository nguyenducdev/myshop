import React, { Component } from 'react';
import { View } from 'react-native';

import Collection from './Collection.js';
import Category from './Category';


class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
                <Collection />
                <Category />
            </View>
        );
    }
}

export default Home;
