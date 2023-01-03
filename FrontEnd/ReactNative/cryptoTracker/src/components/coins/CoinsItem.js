import React from 'react'
import { Image, Platform, Pressable , StyleSheet, Text, View } from 'react-native';
import { colors } from '../../res/colors';

const CoinsItem = ({item, handlePress}) => {
    const arrowUp = "cryptoTracker/src/assets/arrow_up.png",
          arrowDown = "cryptoTracker/src/assets/arrow_down.png";

    const getImgArrow = () => item.percent_change_1h > 0 ? require(arrowUp) : require(arrowDown);

    return (
        <Pressable onPress={()=>handlePress(item)} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{`$ ${item.price_usd}`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h} %</Text>
                <Image 
                style={styles.imgIcon} 
                source={getImgArrow()}
                />
            </View>
          
        </Pressable>
    );
}

const styles = StyleSheet.create({
        container:{
            flexDirection: 'row',
            justifyContent: "space-between",
            padding: 16,
            borderBottomColor: colors.zircon,
            borderWidth: 1,
            marginLeft: Platform.OS === "ios" ? 16 : 0
        },
        row: {
            flexDirection: "row",
            alignItems:"center"
        },
        symbolText: {
            color: "#fff",
            fontWeight:"bold",
            fontSize: 16,
            marginRight: 12
        },
        nameText: {
            color: "#fff",
            fontSize: 14,
            marginRight: 16
        },
        priceText: {
            color:"#fff",
            fontSize: 14
        },
        percentText: {
            color: "#fff",
            fontSize:12,
            marginRight: 8,
        },
        imgIcon: {
            width: 22,
            height: 22
        }
});

export default CoinsItem;