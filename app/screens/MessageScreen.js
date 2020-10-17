import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import ListOwner from '../componenets/ListOwner';
import Constants from 'expo-constants';


const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/user.png"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/user.png"),
    }
]
function MessageScreen() {
    return (
        <SafeAreaView style={styles.screens}>
            <FlatList data={messages} keyExtractor={message=> message.id.toString()} 
            renderItem={({ item }) => <ListOwner title={item.title} subtitle={item.description} image={item.image} /> }
            />
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    screens: {
        padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});

export default MessageScreen;
