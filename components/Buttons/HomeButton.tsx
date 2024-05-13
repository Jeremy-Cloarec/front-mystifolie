import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { mainStyle } from '../../mainStyles';


const styles = StyleSheet.create({
    homeButton: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 10,
        flex: 1,
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 6,
        marginHorizontal: 6,
        height: 120,
    },
    homeText: {
        textAlign: "center",
    }
});

type Props = {
    name: string;
    backC?: any;
    colo?: any;
    navigation: any;
}

export default function HomeButton(props: Props) {
    const { navigation } = props;
    return (
        <Pressable 
        style={[mainStyle.bgViolet4, styles.homeButton, props.backC]}
        onPress={() => navigation.navigate('Choisissez votre formule')}>
        <Text style={[mainStyle.colorDark, mainStyle.text, styles.homeText, props.colo]}>{props.name}</Text>
    </Pressable>
    )
}