import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {

    static instance = new Storage();

   store = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
            return true;
        } catch (err) {
            console.log("Storage store error", err);
            return false;
        }
    }

    get = async (key) => {
        try {
           return await AsyncStorage.getItem(key);
        } catch (err) {
            console.log("Storage get store error", err);
            throw Error(err);
        }
    }

    multiGet = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys);
        } catch (err) {
            console.log("Storage multiget error", err);
            throw Error(err);
        }
    }

    getAllkeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (err) {
            console.log("Storage getAllkeys error", err);
            throw Error(err);
        }
    }

    remove = async (key) => {
        try {
           return await AsyncStorage.removeItem(key);
           return true;
        } catch (err) {
            console.log("Storage remove store error", err);
            return false;
        }
    }
}

export default Storage;