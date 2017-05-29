import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CartView extends Component {

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#213052' }}>
                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>Goto detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CartView;
