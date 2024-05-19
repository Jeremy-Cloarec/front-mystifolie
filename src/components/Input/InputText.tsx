import { TextInput, Text, View, StyleSheet } from "react-native";
import { mainStyle } from "../../mainStyles";

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 8,
        borderColor: "#CCC2D7",
        backgroundColor:"white",
    },
    label: {
        marginBottom: 8
    }
})

export type Props = {
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void
}

export default function InputText(props: Props) {
    return (
        <View>
            <Text style={[styles.label, mainStyle.utendoRegular, mainStyle.text]}>
                {props.label}
            </Text>
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                style={[styles.input, mainStyle.utendoRegular, mainStyle.colorDark, mainStyle.text]}
                placeholderTextColor="#CCC2D7"
            />
        </View>
    )
}