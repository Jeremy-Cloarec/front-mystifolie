import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';
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
    imageHeader: {
        flex:1,
        width:400,
        resizeMode:"contain",
    }

})
export default function Header() {

    return (
        // <View style={styles.nowrap}>
        //     <Text style={[mainStyle.h1, styles.h1]}>Rompez avec </Text><Text style={[mainStyle.h1, styles.h1]}>la routine !</Text>
        // </View>
        <Image style={styles.imageHeader} source={require('../../assets/adaptive-icon.png')} />
    )
}