import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import ListOwner from '../componenets/ListOwner';
import colors from '../config/colors';

function Listing() {
    return (
        <View >
            <Image style={styles.imageBody} source={require('../assets/jacket.jpg')} />
            <View style={styles.details}>
                <Text style={styles.heading} >Red jacket on sale</Text>
                <Text style={styles.subtitle}>$ 100</Text>
            </View>

            <View style={styles.userContainer}>
                <ListOwner title="Sumit Maurya" subtitle="5 Listing" image={require('../assets/user.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    imageBody: {
        height: 300,
        width: "100%",
    },
    details: {
       padding: 20 
    },
    heading: {
        marginBottom: 7,
        fontWeight: "500",
        fontSize: 24
    },
    subtitle: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 10
    }
})  

export default Listing;
