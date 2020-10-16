import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../config/colors';

function Card({ title, price, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.imageBody} source={image} />
            <View style={styles.details}>
                <Text style={styles.heading} >{title}</Text>
                <Text style={styles.subtitle}>{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    imageBody: {
        height: 200,
        width: "100%",
        
    },
    details: {
       padding: 20 
    },
    heading: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 17
    }
})  

export default Card;