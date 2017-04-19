import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Main extends Component {
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
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>Check Main</Text>
                <TouchableOpacity
                    onPress={this.gotoAuthencation.bind(this)}
                >
                    <Text>Go To Authencation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.gotoChangeInfo.bind(this)}
                >
                    <Text>Go To Change Info</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.gotoOrderHistory.bind(this)}
                >
                    <Text>Go To Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
