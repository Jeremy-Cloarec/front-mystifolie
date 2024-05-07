import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { mainStyle } from '../mainStyles';

const styles = StyleSheet.create({
    homeButton: {
        paddingHorizontal: 10,
        paddingVertical: 32,
        borderRadius: 10,
        flex: 1,
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 6,
        marginHorizontal: 6
    },
    homeText: {
        textAlign: "center",
    }
});

type ContentProps = {
    name: string;
}

export default function HomeButton(props: ContentProps) {
    return (
        <Pressable style={[mainStyle.bgViolet1, styles.homeButton]}>
            <Text style={[mainStyle.colorWhite, mainStyle.text, styles.homeText]}>{props.name}</Text>
        </Pressable>
    )
}