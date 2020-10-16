import React from 'react'
import { Image, View , StyleSheet, Text} from 'react-native';
import colors from '../config/colors';

const ListOwner = ({ title, subtitle, image }) =>  {
    return (
        <View style={styles.constainer}>
            <Image style={styles.pic} source={image} />
            <View>
                <Text style={styles.heading}>{title}</Text>
                <Text style={styles.listing}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default ListOwner;

const styles = StyleSheet.create({
    constainer: {
        flexDirection: "row"
    },
    pic: {
        borderRadius: 50,
        width: 50,
        height: 50,
        marginRight: 10
    },
    heading: {
        fontWeight: "700",
    },
    listing: {
        color: colors.mediumTextColor
    }
})
