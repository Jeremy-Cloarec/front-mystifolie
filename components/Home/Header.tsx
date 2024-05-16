import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { mainStyle } from '../../mainStyles';

const styles = StyleSheet.create({
    h1: {
        textAlign: "center",
    },
    nowrap: {
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
    },

})
export default function Header() {

    return (
        <View style={styles.nowrap}>
            <Text style={[mainStyle.h1, styles.h1]}>Rompez avec </Text><Text style={[mainStyle.h1, styles.h1]}>la routine !</Text>
        </View>
    )
}