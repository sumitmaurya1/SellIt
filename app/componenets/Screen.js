import React from 'react';
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({ children}) {
    return (
        <SafeAreaView style={styles.screens}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screens: {
        paddingTop: Constants.statusBarHeight
    }
});


export default Screen;
