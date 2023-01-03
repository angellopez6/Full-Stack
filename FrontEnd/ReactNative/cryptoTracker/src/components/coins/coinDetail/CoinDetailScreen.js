import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, SectionList, FlatList, Pressable, Alert} from 'react-native';
import Http from '../../../libs/Http';
import { colors } from '../../../res/colors';
import CoinMarketItem from './CoinMarketItem';
import Storage from "cryptoTracker/src/libs/storage";

const CoinDetailScreen = ({route, navigation}) => {
    const [coin, setCoin] = useState(route.params.coin);
    const [markets, setMarkets] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    // Podemos usar require() en cualquier parte del codigo de manera condicional.
    // Para cargar imagenes de urls externas podemos utilizar uri como prop.
    // No puede usarse navigation.setOptions({}) sin haber cargado el componente.
    useEffect(() => {
        navigation.setOptions({title: coin.symbol});
        Http.instance
        .get(`https://api.coinlore.net/api/coin/markets/?id=${coin.id}`)
        .then((res)=>setMarkets(res))
        .catch((err)=>console.log(err));
        getFavorite()
    }, []);

    const getCoinIcon = (nameid) => {
        if(nameid){
            return `https://c1.coinlore.com/img/25x25/${nameid}.png`;
        }
    }

    const getSections = (coin) => {
        return sections = [
            {
                title: "Market Up",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            },
        ];
    }

    const addFavorite = async () => {
        const myCoin = JSON.stringify(coin);
        const key = `favorite-${coin.id}`;
        const stored = await Storage.instance.store(key, myCoin);

        stored && setIsFavorite(true);
    }

    const removeFavorite = async () => {
        Alert.alert("Remove favorite", "Are you sure ?",
        [
            {
                text: "Cancel",
                onPress: ()=>{},
                style: "cancel"
            },
            {
                text: "Remove",
                onPress: async ()=>{
                    const key = `favorite-${coin.id}`;
                    await Storage.instance.remove(key);
                    setIsFavorite(false);
                },
                style: "destructive"
            }
        ]
        );
    }

    const getFavorite = async () => {
        try {
            const key = `favorite-${coin.id}`;
            const favStr = await Storage.instance.get(key);
            favStr != null && setIsFavorite(true);
        } catch (err) {
            console.log("Get favorites err", err);
        }
    }

    const toggleFavorite = () => {  
        return isFavorite 
        ? removeFavorite()
        : addFavorite()
    }

    return (
        <View style={styles.container}>

            <View style={styles.subHeader}>
                
                <View style={styles.row}>
                    <Image
                    style={styles.iconImg}
                    source={{uri: getCoinIcon(coin.nameid)}}
                    />
                    <Text style={styles.titleText}>{coin.name}</Text>
                </View>

                <Pressable
                onPress={toggleFavorite}
                style={[
                    styles.btnFavorite,
                    isFavorite 
                    ? styles.btnFavoriteRemove
                    : styles.btnFavoriteAdd
                ]}
                >
                    <Text style={styles.btnFavoriteText}>{ isFavorite ? "Remove favorite" : "Add Favorite"}</Text>
                </Pressable>
            </View>

            <SectionList
                style={styles.section}
                sections={getSections(coin)}
                keyExtractor={(item)=> item}
                renderItem={({ item })=>(
                    <View style={styles.sectionItem}>
                         <Text style={styles.itemText}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section })=>(
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionText}>{section.title}</Text>
                    </View>
                )}
            />

            <Text style={styles.marketsTitle}>Markets</Text>

            <FlatList
            style={styles.list}
            horizontal
            data={markets}
            renderItem={({item})=>(<CoinMarketItem item={item} />)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.charade,
        flex: 1
    },
    row: {
        flex:1,
        flexDirection: "row"
    }
    ,
    iconImg: {
        width: 25,
        height: 25,
    },
    bgBlack: {
        backgroundColor: "#000"
    },
    subHeader: {
        backgroundColor: "rgba(0,0,0, 0.1)",
        padding:16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white,
        marginLeft: 8,
    },
    section: {
        maxHeight: 220
    },
    list: {
     maxHeight: 100,
     paddingLeft: 16,
    },
    sectionHeader:{
        backgroundColor: "rgba(0,0,0, .2)",
        padding: 8,
    },
    sectionItem: {
        padding: 8
    },
    itemText: {
        color: colors.white,
        fontSize: 14,
    },
    sectionText: {
        color: colors.white,
    fontSize: 14,
    fontWeight: "bold"
    },
    marketsTitle: {
        color: colors.white,
        fontSize: 16,
        marginBottom:16,
        marginLeft:16,
        fontWeight: "bold"
    },
    btnFavorite: {
        padding: 8,
        borderRadius: 8
    },
    btnFavoriteText: {
        color: colors.white,
    },
    btnFavoriteAdd: {
        backgroundColor: colors.picton
    },
    btnFavoriteRemove: {
        backgroundColor: colors.carmine
    }
});

export default CoinDetailScreen;
