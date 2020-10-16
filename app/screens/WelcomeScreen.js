import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../componenets/AppButton';
import Colors from '../config/colors';

const WelcomeScreen = () =>  {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.png')} blurRadius={10} >
            <View style={styles.logoContatiner}>
                <View style={styles.logo}/>
                <Text style={styles.brandLogo}>Sell It</Text>
                <Text style={styles.brandTagLine}>Sell What You Dont Need it</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="login" textColor="white"  />
                <AppButton title="Register" color="secondaryColor" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 2
    },
    brandLogo: {
        color: "black",
        fontSize: 30,
        fontWeight: "700",
    },
    buttonContainer:{
        padding: 20,
        width: "100%",
    },  
    brandTagLine: {
        color: "#c3c5ca",
        top: 15,
        alignSelf: "center",
        borderColor: "red",
        fontWeight: "700",
        letterSpacing: 2
    },
    logoContatiner:{
        position: "absolute",
        top: 80,
        alignItems: "center"
    },
    logo: {
        height: 40,
        width: 40,
        backgroundColor: Colors.primaryColor,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        position: "absolute",
        right: 55
    },
    
    

})

export default WelcomeScreen;
