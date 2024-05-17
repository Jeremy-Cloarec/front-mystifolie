import React from 'react'
import { StyleSheet, Image } from 'react-native';


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
        width:220,
        resizeMode:"contain",
    }

})
export default function Header() {
    return (
        <Image style={styles.imageHeader} source={require('../../../assets/logoHeader.png')} />
    )
}