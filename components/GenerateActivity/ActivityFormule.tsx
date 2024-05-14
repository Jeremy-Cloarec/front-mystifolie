import React from 'react'
import Navigation from '../Navigation/Navigation'
import Stepper from '../Stepper/Stepper'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
})

export default function ActivityFormule() {
    const steps = [
        { todo: false, doing: true, done: false },
        { todo: true, doing: false, done: false },
        { todo: true, doing: false, done: false },
        { todo: true, doing: false, done: false },
        { todo: true, doing: false, done: false },
        { todo: true, doing: false, done: false },
        { todo: true, doing: false, done: false },
        { todo: true, doing: false, done: false },
        { todo: true, doing: false, done: false },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <Stepper
                filtre="1/9 : Choisissez votre activité"
                nextFiltre="Prochain : Avez-vous un événement à fêter ? "
                steps={steps} />
            <View style={styles.body}>
                <Text>Body</Text>
            </View>
            <Navigation />
        </SafeAreaView>
    )
}


