import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { dataStepper } from './dataStepper'

const styles = StyleSheet.create({
    stepper: {
        height: 75,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    containerStepper: {
        height: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    elementStepper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue',
        height: 10,
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
    filtre: string,
    nextFiltre: string,
    steps: { done: boolean, todo: boolean, doing: boolean }[]

}
export default function Stepper({ filtre, nextFiltre, steps }: Props) {
    const stepsData = dataStepper
    return (
        <View style={styles.stepper}>
            <View>
                {stepsData.map((step, index) => (
                    < Text key={index}>{step.filtre && index === 0 ? step.filtre : ""}</Text>
                ))}
                <View style={styles.containerStepper}>
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
                <Text>{nextFiltre}</Text>
            </View>
            <View>
            </View>
        </View>
    )
}