import React from 'react';
import { StyleSheet, Text, Pressable, TextStyle } from 'react-native';
import { mainStyle } from '../../mainStyles';


const styles = StyleSheet.create({
    homeButton: {
        paddingHorizontal: 12,
        paddingVertical: 38,
        borderRadius: 10,
        flex: 1,
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    homeText: {
        textAlign: "center",
    }
});
type Props = {
    name: string;
    backC?: TextStyle | null;
    colo?: TextStyle | null ;
    navigation: () => void;
}

export default function HomeButton(props: Props) {

    return (
        <Pressable
            style={[mainStyle.bgViolet4, styles.homeButton, props.backC]}
            onPress={props.navigation}>
            <Text style={[mainStyle.colorViolet1, mainStyle.text, styles.homeText, props.colo, mainStyle.utendoMedium]}>{props.name}</Text>
        </Pressable>
    )
}