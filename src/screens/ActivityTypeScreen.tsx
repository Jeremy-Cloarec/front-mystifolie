import React from 'react'
import Navigation from '../../src/components/Navigation/Navigation'
import Stepper from '../../src/components/Stepper/Stepper'
import { Text, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dataStepper } from '../../src/components/Stepper/dataStepper'
import { mainStyle } from '../mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import ButtonValidateNavigation from 'src/components/Buttons/ButtonValidateNavigation';

const steps = [
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: true, done: false },
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
    },
    containerMainButton: {
        paddingHorizontal: 16,
        paddingVertical: 16,

    },
    containerMainContent: {
        flex: 1,
        justifyContent: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
    }
})

export default function ActivityTypeScreen() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={2}
            />
            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMainButton]}>
                <View style={styles.containerMainContent}>
                    <Text>Choisissez votre activité</Text>
                </View>
                <View style={styles.containerButton}>
                    <ButtonValidateNavigation
                        name="Valider"
                        navigation={() => navigation.navigate("Choisissez votre date")}
                    />
                </View>
            </View>
        </View>
    )
}


