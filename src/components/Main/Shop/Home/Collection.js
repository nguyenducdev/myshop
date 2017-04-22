import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


import bannerImage from '../../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, banerStyle, textStyle } = styles;
        return (
            <View style={wrapper} >
                <View style={{ flex: 1, justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Image source={bannerImage} style={banerStyle} />
                </View>
            </View>
        );
    }
}
//933*465

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    banerStyle: {
        height: imageHeight,
        width: imageWidth,
    },
    textStyle: {
        fontSize: 23,
        color: '#AFAEAF'
    }
});

