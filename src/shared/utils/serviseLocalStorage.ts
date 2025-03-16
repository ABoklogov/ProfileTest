import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorage = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    console.log(error);
    return null
  };
};

const setStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  };
};

const removeStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  };
};

export {
  getStorage,
  setStorage,
  removeStorage
}