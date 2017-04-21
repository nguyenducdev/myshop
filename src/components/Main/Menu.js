import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Menu extends Component {
    gotoAuthencation() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#213052' }}>
                <TouchableOpacity onPress={this.gotoAuthencation.bind(this)}>
                    <Text> Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text> Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text> Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Menu;
