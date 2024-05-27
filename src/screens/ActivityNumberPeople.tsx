import React, { useState, useEffect } from 'react'
import Stepper from '../components/Stepper/Stepper'
import { Text, View } from 'react-native'
import StyleSheet from 'react-native-media-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dataStepper } from '../components/Stepper/dataStepper'
import { mainStyle } from '../mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation'
import CountPeople from '../components/CountPeople';

const steps = [
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: true, done: false },
    { todo: true, doing: false, done: false },
];

const stepsData = dataStepper

const { ids, styles } = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        padding: 25,
    },
    containerMain: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: "100%",
        margin: "auto",
        '@media (min-width: 768px)': {
            marginTop: 32,
            marginBottom: 32,
            borderRadius: 12,
            maxWidth: 500,
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
    },
    containerMainContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    containerTwoButton: {
        width: "100%",
        gap: 12,
    },
    subContainerButtons: {
        flexDirection: 'row',
    },
    error: {
        marginBottom: 12
    }
})

export default function ActivityNumberPeople() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [value, setValue] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const handleValidationPress = () => {
        if (value===0) {
            setError('Veuillez entrer un nombre de personnes avant de continuer');
        } else {
            if (value) {
                console.log(`Number of people: ${value}`);
            }
            navigation.navigate('Paiement');
        }
    };

    useEffect(() => {
        if (value > 0) {
            setError('');
        }
    }, [value]);

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={6}
            />
            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                <CountPeople
                    handleIncrement={() => setValue(value + 1)}
                    handleDecrement={() => setValue(value - 1)}
                    value={value}
                    minValue={0}
                    maxValue={20}
                />
                <View>
                    {error && <Text style={styles.error}>{error}</Text>}
                </View>
                <View style={styles.containerTwoButton} dataSet={{ media: ids.containerTwoButton }}
                >
                    <View
                        style={styles.subContainerButtons}
                    >
                    </View>
                    <View
                        style={styles.subContainerButtons}
                        dataSet={{ media: ids.subContainerButtons }}
                    >
                        <ButtonValidateNavigation
                            name="Valider"
                            navigation={handleValidationPress}
                            accessibilityLabel="Valider le nombre de personne"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


