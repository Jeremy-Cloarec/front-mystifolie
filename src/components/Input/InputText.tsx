import * as React from "react";
import { TextInput, Text, View, StyleSheet, Platform, TextStyle, TouchableOpacity } from "react-native";
import { mainStyle } from "../../mainStyles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    inputContainer: {
        position: "relative",
    },
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
    },
    icon: {
        position: "absolute",
        right: 4,
        top: 45,
        padding:6
    },
})

type Props = {
    testID?: string,
    password?: string,
    label?: string,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    keyboardType?: any
    secureTextEntry?: boolean,
    onToggleSecureTextEntry?: () => void
}

export default function InputText(props: Props) {
    return (
        <View style={styles.inputContainer}>
            <Text
                nativeID="inputLabel"
                style={[styles.label, mainStyle.utendoRegular, mainStyle.text]}>
                {props.label}
            </Text>
            <TextInput
                testID={props.testID}
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
                        Platform.select({
                            web: {
                                outlineColor: "#58347C",
                            }
                        }) as TextStyle
                    ]
                }
                placeholderTextColor="#CCC2D7"
            />
            {props.secureTextEntry !== undefined && (
                <TouchableOpacity
                    style={styles.icon}
                    onPress={props.onToggleSecureTextEntry}
                    testID="input-text-toggle-secure-text"
                >
                    <MaterialCommunityIcons
                        name={props.secureTextEntry ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}