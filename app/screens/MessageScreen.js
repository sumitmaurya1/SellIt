import React from 'react'
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
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
console.log(Constants)
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
        paddingTop: Constants.statusBarHeight
    }
});

export default MessageScreen;
