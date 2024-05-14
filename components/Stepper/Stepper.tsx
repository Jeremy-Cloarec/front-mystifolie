import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { dataStepper } from './dataStepper'

const styles = StyleSheet.create({
    stepper: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal:20,
    },
    containerStepper: {
        justifyContent: "center",
        width: "100%",
    },
    containerFilter: {
        flex: 1,
    },
    containerElement: {
        height: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    elementStepper: {
        flex: 1,
        flexDirection: 'row',
        height: 10,
    },
    containerNextFilter: {
        flex: 1,
    },
    done: {
        backgroundColor: '#08050C',
    },
    todo: {
        backgroundColor: '#DDD6E4',
    },
    doing: {
        backgroundColor: '#684889',
    },
})

export type Props = {
    nextFiltre: string,
    steps: { done: boolean, todo: boolean, doing: boolean }[]
}
export default function Stepper({ nextFiltre, steps }: Props) {
    const stepsData = dataStepper
    return (
        <View style={styles.stepper}>
            <View style={styles.containerStepper}>
                <View style={styles.containerFilter}>
                    {stepsData.map((step, index) => (
                        < Text key={index}>{step.filtre && index === 0 ? step.filtre : ""}</Text>
                    ))}
                </View>
                <View style={styles.containerElement}>
                    {steps.map((step, index) => (
                        <View
                            key={index}
                            style={[
                                styles.elementStepper,
                                step.done && styles.done,
                                step.todo && styles.todo,
                                step.doing && styles.doing
                            ]}
                        />
                    ))}
                </View>
                <View style={styles.containerNextFilter}>
                    <Text>{nextFiltre}</Text>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}