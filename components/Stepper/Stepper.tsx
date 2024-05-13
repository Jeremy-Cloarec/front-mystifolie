import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    stepper: {
        height: 75,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    elementStepper: {
        height: 10,
        flex: 1,
        backgroundColor: 'blue'
    },
    done: {
        backgroundColor: 'green'
    },
    todo: {
        backgroundColor: 'red'
    },
    doing: {
        backgroundColor: 'black'
    }
})

export type Props = {
    filtre: string,
    nextFiltre: string
}
export default function Stepper({ filtre, nextFiltre }: Props) {
    return (
        <View style={styles.stepper}>
            <View>
                <Text>{filtre}</Text>
                <View style={[styles.elementStepper, styles.doing, styles.done, styles.todo]}></View>
                <Text>{nextFiltre}</Text>
            </View>
            <View>
            </View>
        </View>
    )
}