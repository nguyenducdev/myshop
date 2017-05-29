import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const url = 'http://localhost:9000/images/product/';

export default class TopProduct extends Component {
    gotoProductDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const {
            container,
            titleContainer,
            title,
            body,
            productContainer,
            productImage,
            productName,
            productPrice
         } = styles;
        const { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    {topProducts.map(e => (
                        <TouchableOpacity
                            style={productContainer}
                            onPress={() => this.gotoProductDetail(e)}
                            key={e.id}
                        >
                            <Image source={{ uri: `${url}${e.images[0]}` }} style={productImage} />
                            <Text style={productName} >{e.name.toUpperCase()}</Text>
                            <Text style={productPrice} >{e.price}$</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 451;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingBottom: 20
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingRight: 10,
        paddingBottom: 10
    },
    productContainer: {
        width: productWidth - 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        marginBottom: 10
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }


});
