import React, {useState} from 'react'
import { TextInput, Platform, View, StyleSheet } from 'react-native';
import { colors } from '../../res/colors';

const CoinsSearch = ({query,handleChangeText}) => {
    return (
        <View>
            <TextInput
            style={[
                styles.textInput, 
                Platform.OS === "android" ? styles.textInputAndroid : styles.textInputIOS
            ]}
            onChangeText={handleChangeText}
            value={query}
            placeholder={`Search coin`}
            placeholderTextColor="#fff"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: colors.charade,
        paddingLeft: 16,
        color: "#fff"
    },
    textInputAndroid: {
        borderWidth: 2,
        borderBottomColor: colors.zircon
    },
    textInputIOS: {
        margin: 8,
        borderRadius: 8
    }
});

export default CoinsSearch;