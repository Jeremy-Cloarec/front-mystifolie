import React from 'react'
import Navigation from '../Navigation/Navigation'
import Stepper from '../Stepper/Stepper'
import { Text, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dataStepper } from '../Stepper/dataStepper'
import { mainStyle } from 'mainStyles'

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

const stepsData = dataStepper

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default function ActivityFormule() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper 
                steps={steps}
                stepsData={stepsData}
                indexArray={0} />
            <View style={[styles.body, mainStyle.bgOrange5 ]}>
                <Text >Body</Text>
            </View>
            <Navigation />
        </View>
    )
}


