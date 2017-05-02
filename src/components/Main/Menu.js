import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import icon from '../../media/temp/profile.png';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: false
        };
    }
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
        const {
            container,
            profile,
            btnStyle,
            btnText,
            btnSingInStyle,
            btnTextSignIn,
            loginContainer,
            userName
            } = styles;
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={loginContainer}>
                <Text style={userName} >
                    Nguyen Minh Duc
                </Text>
                <View>
                    <TouchableOpacity
                        style={btnSingInStyle}
                        onPress={this.gotoOrderHistory.bind(this)}
                    >
                        <Text style={btnTextSignIn}>OrderHistory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={btnSingInStyle}
                        onPress={this.gotoChangeInfo.bind(this)}
                    >
                        <Text style={btnTextSignIn}>ChangeInfo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSingInStyle}>
                        <Text style={btnTextSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                <Image source={icon} style={profile} />
                {mainJSX}
            </View >
        );
    }
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 30,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },
    btnText: {
        color: '#34B098',
        fontSize: 20,
    },
    btnSingInStyle: {
        height: 50,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34B098',
        fontSize: 15,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userName: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 20
    }
});
