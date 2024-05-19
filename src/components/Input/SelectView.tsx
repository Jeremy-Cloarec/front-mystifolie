import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { mainStyle } from "src/mainStyles";
type Props = {
    handlePress: () => void;
    formule: string;
    detail?: string;
    borderColor: any;
}

const styles = StyleSheet.create({
    containerPressable: {
        width: "100%",
    },
    pressable: {
        borderRadius: 8,
        paddingVertical: 24,
        paddingHorizontal: 16,
        gap:10,
        borderWidth: 2,
    },
    formule: {
        textAlign: "center",
    },
    detail: {
        textAlign: "center",
        width: "100%",
    }
})

export default function SelectView(prop: Props) {
    return (
        <View style={styles.containerPressable}>
            <TouchableOpacity onPress={prop.handlePress} style={[
                styles.pressable,
                mainStyle.bgViolet5,
                { borderColor: prop.borderColor },
            ]}
            >
                <Text
                    style={[
                        styles.formule,
                        mainStyle.colorViolet1,
                        mainStyle.h2,
                        mainStyle.utendoMedium]}>
                    {prop.formule}
                </Text>
                {prop.detail ? <Text style={[styles.detail, mainStyle.colorViolet1, mainStyle.text, mainStyle.utendoRegular]}> {prop.detail}</Text> : null}
            </TouchableOpacity>
        </View>
    )
}