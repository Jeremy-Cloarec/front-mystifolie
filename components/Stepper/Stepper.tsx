import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { mainStyle } from 'mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from 'types/navigation'

const styles = StyleSheet.create({
    stepper: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingTop: 5,
    },
    containerStepper: {
        justifyContent: "center",
        flex: 5,
    },
    containerFilter: {
        flex: 1,
        justifyContent: "center",
    },
    containerElement: {
        height: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    elementStepper: {
        flex: 1,
        flexDirection: 'row',
        height: 8,
    },
    containerNextFilter: {
        flex: 1,
        justifyContent: "center",
    },
    containerImage: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: 18,
        height: 18,
    },
    firstElement: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    lastElement: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    done: {
        backgroundColor: '#FFFFFF',
    },
    todo: {
        backgroundColor: '#684889',
    },
    doing: {
        backgroundColor: '#CCC2D7',
    },
})

export type Props = {
    steps: { done: boolean, todo: boolean, doing: boolean }[]
    indexArray: number,
    stepsData: { filtre: string, nextFiltre: string }[]
}
export default function Stepper({ steps, stepsData, indexArray }: Props) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();    return (
        <View style={[styles.stepper, mainStyle.bgViolet1]}>
            <View style={[styles.containerStepper]}>
                <View style={styles.containerFilter}>
                    <Text style={[mainStyle.filterText, mainStyle.colorWhite]}>{stepsData[indexArray].filtre}</Text>
                </View>
                <View style={styles.containerElement}>
                    {steps.map((step, index) => (
                        <View
                            key={index}
                            style={[
                                styles.elementStepper,
                                step.done && styles.done,
                                step.todo && styles.todo,
                                step.doing && styles.doing,
                                index === 0 && styles.firstElement,
                                index === steps.length - 1 && styles.lastElement
                            ]}
                        />
                    ))}
                </View>
                <View style={styles.containerNextFilter}>
                    <Text style={[mainStyle.filterNextText, mainStyle.colorWhite]}>{stepsData[indexArray].nextFiltre}</Text>
                </View>
            </View>
            <Pressable
                style={styles.containerImage}
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/close.png')}
                />
            </Pressable>
        </View>
    )
}