import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { mainStyle } from "src/mainStyles";
type Props = {
    handlePress: () => void;
    title: string;
    subTitle?: string;
    borderColor: any;
    fontSize?: number;
}

const styles = StyleSheet.create({
    containerPressable: {
        width: "100%",
    },
    pressable: {
        borderRadius: 8,
        paddingVertical: 24,
        paddingHorizontal: 16,
        gap: 10,
        borderWidth: 2,
    },
    title: {
        textAlign: "center",
    },
    subTitle: {
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
                        styles.title,
                        mainStyle.colorViolet1,
                        mainStyle.utendoMedium,
                        !prop.fontSize ? mainStyle.h2 : {fontSize: 20}
                    ]}>
                    {prop.title}
                </Text>
                {prop.subTitle ? <Text style={[styles.subTitle, mainStyle.colorViolet1, mainStyle.text, mainStyle.utendoRegular]}> {prop.subTitle}</Text> : null}
            </TouchableOpacity>
        </View>
    )
}