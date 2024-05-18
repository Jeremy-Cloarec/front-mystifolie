import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { mainStyle } from '../../mainStyles';


const styles = StyleSheet.create({
    principalButton: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 8,

    },
    buttonText: {
        fontSize: 20
    }
});

type Props = {
    name: string;
    color?: any;
    backC?: any;
    navigation: () => void;
}

export default function ButtonValidateNavigation(props: Props) {
    const { navigation } = props;
    return (
        <Pressable
            style={
                [
                    styles.principalButton,
                    mainStyle.bgViolet1,
                    props.backC
                ]
            }
            onPress={navigation}>
            <Text style={
                [
                    mainStyle.colorWhite,
                    mainStyle.utendoMedium,
                    styles.buttonText,
                    props.color,
                ]
            }>{props.name}</Text>
        </Pressable>
    )
}