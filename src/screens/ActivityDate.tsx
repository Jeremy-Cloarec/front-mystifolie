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
import DatePicker from '../components/DatePicker';

const steps = [
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: true, done: false },
    { todo: true, doing: false, done: false },
    { todo: true, doing: false, done: false },
    { todo: true, doing: false, done: false },
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
        width: "100%",
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

export default function ActivityFormuleScreen() {

    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [error, setError] = useState<string | null>(null);
    const [date, setDate] = React.useState<any>(undefined);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (date !== undefined) {
            setError('');
        }
    }, [date]);

    const handleValidationPress = () => {
        if (!date) {
            setError('Veuillez sélectionner une date avant de continuer.');
        } else {
            if (date) {
                console.log(`Selected Date: ${date}`);
            }
            navigation.navigate('Quel est votre fourchette de prix ?');
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={3}
            />
            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                <View
                    style={styles.containerMainContent}
                    dataSet={{ media: ids.containerMainContent }}>
                    <DatePicker
                        date={date}
                        setDate={setDate}
                        open={open}
                        setOpen={setOpen}
                    />
                </View>
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
                            accessibilityLabel="Valider la date"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


