import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    navigation : {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    }
})
export default function Navigation() {
    return (
        <View style={styles.navigation}>
            <Text>Navigation</Text>
        </View>
    )
}