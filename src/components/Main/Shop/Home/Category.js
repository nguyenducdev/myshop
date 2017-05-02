import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const { wrapper, banerStyle, textStyle, cateTitle } = styles;
        return (
            <View style={wrapper} >
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }} showsButtons >
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        <Image source={littleIcon} style={banerStyle}>
                            <Text style={cateTitle} >Maxi Dress</Text>
                        </Image>
                        <Image source={maxiIcon} style={banerStyle}>
                            <Text style={cateTitle} >Maxi Dress</Text>
                        </Image>
                        <Image source={partyIcon} style={banerStyle}>
                            <Text style={cateTitle} >Maxi Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    banerStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 23,
        color: '#AFAEAF'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});

