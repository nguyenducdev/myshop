import React, { Component } from 'react';
import { View, Text, TouchableOpacity, 
    Dimensions, Image, TextInput, StyleSheet 
} from 'react-native';

import ic_Logo from '../../../media/appIcon/ic_logo.png';
import ic_Menu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;

        return (
            <View>
                <View style={wrapper} >
                    <View style={row1} >
                        <TouchableOpacity onPress={this.props.onOpen}>
                            <Image source={ic_Menu} style={iconStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Wearing a Dress</Text>
                        <Image source={ic_Logo} style={iconStyle} />
                    </View>
                    <TextInput 
                        style={textInput}
                        placeholder="What do you want to buy?"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { height: height / 23, backgroundColor: '#FFF', paddingLeft: 10 },
    titleStyle: { color: '#fff', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});
