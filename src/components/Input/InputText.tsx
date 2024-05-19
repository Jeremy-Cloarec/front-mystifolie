import * as React from "react";
import { TextInput, Text, View, StyleSheet, Platform, TextStyle } from "react-native";
import { mainStyle } from "../../mainStyles";

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 8,
        borderColor: "#CCC2D7",
        backgroundColor: "white",
    },
    label: {
        marginBottom: 8
    }
})

export type Props = {
    label: string,
    placeholder: string,
    value: string,
    keyboardType?: any
    secureTextEntry?: boolean
    onChangeText: (text: string) => void

}

export default function InputText(props: Props) {
    return (
        <View>
            <Text
                nativeID="inputLabel"
                style={[styles.label, mainStyle.utendoRegular, mainStyle.text]}>
                {props.label}
            </Text>
            <TextInput
                accessibilityLabel="input"
                accessibilityLabelledBy="inputLabel"
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                style={
                    [
                        styles.input,
                        mainStyle.utendoRegular,
                        mainStyle.colorDark,
                        mainStyle.text,
                        Platform.select ({
                            web:{
                                outlineColor: "#58347C",
                            }
                        }) as TextStyle
                    ]
                }
                placeholderTextColor="#CCC2D7"
            />
        </View>
    )
}