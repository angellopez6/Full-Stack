import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { colors } from '../../res/colors';
import FavoritesEmptyState from './FavoritesEmptyState';
import Storage from 'cryptoTracker/src/libs/storage';
import CoinsItem from '../coins/CoinsItem';

const FavoritesScreens = ({navigation}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
       const unsubscribe = navigation.addListener("focus",()=>getFavorites());
       return unsubscribe;
    }, [navigation])

    const getFavorites = async () => {
        try {
            const allKeys = await Storage.instance.getAllkeys(),
                keys = allKeys.filter((key)=> key.includes("favorite-")),
                favs = await Storage.instance.multiGet(keys),
                favorites = favs.map((fav)=> JSON.parse(fav[1]));
                setFavorites(favorites);
        } catch (err) {
            console.log("Get AllFavorites error",err);
        }
    }

    const handlePress = (coin) => navigation.navigate("CoinDetail", { coin });

    return (
      <View style={styles.container}>
            {
                favorites.length > 0
                ? (
                    <FlatList
                    data={favorites}
                    renderItem={({item})=><CoinsItem item={item} handlePress={handlePress}/>}
                    />
                )
                : (<FavoritesEmptyState/>)
            }
      </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.charade,
    },
});

export default FavoritesScreens;