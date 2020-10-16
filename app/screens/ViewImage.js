import React from 'react';
import { Image , StyleSheet, View} from 'react-native';
import Colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewImage = () => {
    return (
        <View style={styles.container}>

            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" />
            </View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")}  />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000",
        flex: 1,
    },
    closeIcon:{
        position: "absolute",
        top: 40,
        left: 30
    }, 
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
});

export default ViewImage;