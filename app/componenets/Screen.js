import React from 'react';
import constants from 'expo-constants'
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({ children}) {
    return (
        <SafeAreaView style={styles.screens}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screens = constants.statusBarHeight
})
export default Screen;
