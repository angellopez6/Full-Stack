import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../res/colors';

const CoinMarketItem = ({item}) => {
    return (
        <View style={styles.container}>
             <Text style={styles.nameText} children={item.name}/>
             <Text style={styles.priceText} children={item.price_usd}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0, .1)",
        borderColor: colors.zircon,
        borderWidth: 1,
        padding: 16,
        margin: 8,
        alignItems: "center"
    },
    nameText: {
        color: "#fff",
        fontWeight: "bold",
    },
    priceText: {
        color: "#fff"
    }
});

export default CoinMarketItem;