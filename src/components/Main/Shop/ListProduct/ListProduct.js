import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

import iconback from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

export default class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        const {
            container,
            header,
            wapper,
            backStyle,
            titleStyle,
            productContainer,
            productInfo,
            colorStyle,
            productImage,
            lastrowInfo,
            txtName,
            txtPrice,
            txtMaterial,
            txtShowDetail
        } = styles;
        return (
            <View style={container}>
                <ScrollView style={wapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={iconback} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={productContainer}>
                        <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                            <Image source={sp1} style={productImage} />
                        </TouchableOpacity>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastrowInfo}>
                                <Text>Color RoyallBlue</Text>
                                <View style={colorStyle} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 10,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    wapper: {
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderColor: '#fff',
        borderTopColor: '#F0F0F0',
        borderWidth: 1
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    colorStyle: {
        backgroundColor: '#0d60e5',
        width: 16,
        height: 16,
        borderRadius: 8
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    lastrowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 17,
        fontWeight: '700'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65'
    },
    txtMaterial: {
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});
