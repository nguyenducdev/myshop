import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';

import iconback from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';


export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSingIn: true
        };
    }

    singIn() {
        this.setState({ isSingIn: true });
    }

    singUp() {
        this.setState({ isSingIn: false });
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const {
            row1,
            iconStyle,
            titleStyle,
            container,
            controlStyle,
            signInStyle,
            signUpStyle,
            inactiveStyle,
            activeStyle,
            inputStyle,
            btnSignInNowStyle,
            buttonText
        } = styles;

        const signInJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TouchableOpacity style={btnSignInNowStyle}>
                    <Text style={buttonText} > SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const signUpJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your name" />
                <TextInput style={inputStyle} placeholder="Enter your email" />
                <TextInput style={inputStyle} placeholder="Enter your password" />
                <TextInput style={inputStyle} placeholder="Re-Enter your password" />
                <TouchableOpacity style={btnSignInNowStyle}>
                    <Text style={buttonText} > SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );

        const isSingin = this.state.isSingIn;
        const mainJSX = isSingin ? signInJSX : signUpJSX;
        return (
            <View style={container}>
                <View style={row1} >
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={iconback} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>

                {mainJSX}

                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.singIn.bind(this)}>
                        <Text style={isSingin ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.singUp.bind(this)}>
                        <Text style={!isSingin ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between',
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#fff', fontFamily: 'Avenir', fontSize: 30 },
    iconStyle: { width: 30, height: 30 },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EBA77'
    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    btnSignInNowStyle: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontWeight: '400'
    }
});
