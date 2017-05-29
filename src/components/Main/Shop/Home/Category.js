import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const url = 'http://:9000/images/type/';

export default class Category extends Component {
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { wrapper, banerStyle, textStyle, cateTitle } = styles;
        const { types } = this.props;
        return (
            <View style={wrapper} >
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }} showsButtons >
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        {types.map(e => (
                            <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key={e.id}>
                                <Image source={{ uri: `${url}${e.image}` }} style={banerStyle}>
                                    <Text style={cateTitle} >{e.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        ))}
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

