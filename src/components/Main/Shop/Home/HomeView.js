import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Collection from './Collection.js';
import Category from './Category';
import TopProduct from './TopProduct';


class HomeView extends Component {
    render() {
        const { types } = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
                <Collection />
                <Category navigator={this.props.navigator} types={types} />
                <TopProduct navigator={this.props.navigator} />
            </ScrollView>
        );
    }
}

export default HomeView;
