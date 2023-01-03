import React, { useEffect, useState } from 'react'
import { View , Text, Pressable, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import { color } from 'react-native-reanimated';
import Http from '../../libs/Http';
import { colors } from '../../res/colors';
import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch';

const CoinsScreen = ({navigation}) => {
    const [coins, setCoins] = useState([]);
    const [allCoins, setAllCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setLoading(true);
        const coins = async () => await Http.instance.get("https://api.coinlore.net/api/tickers/");
        coins().then(res=>(setCoins(res.data ),setAllCoins(res.data ),setLoading(false)));
    }, []);

    useEffect(() => {
        const coinsFiltered = allCoins
        .filter((coin)=> (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase()))
        );
        setCoins(coinsFiltered);
    }, [query])

    const handlePress = (coin) => navigation.navigate('CoinDetail', { coin });

    const handleChangeText = (query) => setQuery(query);

    return (
        <View style={styles.container}>
            <CoinsSearch
            query={query}
            handleChangeText={handleChangeText}
            />
            {loading && <ActivityIndicator color="#000" size="large" style={styles.loader}/>}
            <FlatList 
                data={coins}
                renderItem={({ item })=>
                <CoinsItem 
                item={item} 
                handlePress={handlePress}
                />
                }
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.charade,
    },
    titleText:{
        color:"#fff",
        textAlign:"center"
    },
    btn: {
        padding:8,
        backgroundColor:"blue",
        borderRadius:8,
        margin:16,
    },
    btnText: {
        color: "#fff",
        textAlign:"center"
    },
    loader: {
        margin:50
    }
});

export default CoinsScreen;