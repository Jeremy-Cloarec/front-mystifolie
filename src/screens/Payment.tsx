import { useState } from 'react'
import Stepper from '../components/Stepper/Stepper'
import { Text, View } from 'react-native'
import StyleSheet from 'react-native-media-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dataStepper } from '../components/Stepper/dataStepper'
import { mainStyle } from '../mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation'
import NumCard from '../components/Input/NumCard'
import NameInput from '../components/Input/NameInput'
import YearCard from '../components/Input/YearCard'
import MonthCoard from 'src/components/Input/MonthCard';
import CvcCard from 'src/components/Input/CvcCard';

const steps = [
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: true, doing: true, done: false },
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
        gap: 12,
    },
    containerTwoButton: {
        width: "100%",
        gap: 12,
    },
    subContainerButtons: {
        flexDirection: 'row',
    },
    containerInputPaiment: {
        flexDirection: 'row',
        gap: 12,
    }
})

export default function Payment() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [name, onChangeName] = useState('');
    const [numberCard, onChangeNumberCard] = useState('');
    const [cscCardNumber, onChangeCscCardNumber] = useState('');
    const [monthCard, onChangeMonthCard] = useState('');
    const [yearCard, onChangeYearCard] = useState('');
    const [error, onChangeError] = useState('');

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={7}
            />
            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                <View
                    style={styles.containerMainContent}
                    dataSet={{ media: ids.containerMainContent }}>
                    <NameInput
                        name={name}
                        onChangeName={onChangeName}
                    />
                    <NumCard
                        numberCard={numberCard}
                        onChangeNumberCard={onChangeNumberCard}
                    />
                    <View style={styles.containerInputPaiment}>
                        <YearCard
                            YearCard={yearCard}
                            onChangeYearCard={onChangeYearCard}
                        />
                        <MonthCoard
                            monthCard={monthCard}
                            onChangeMonthCard={onChangeMonthCard}
                        />
                    </View>
                    <View style={styles.containerInputPaiment}>
                        <CvcCard
                            cscCardNumber={cscCardNumber}
                            onChangeCscCardNumber={onChangeCscCardNumber}
                        />
                        <Text>Les 3 derniers chiffres de votre carte</Text>
                    </View>
                </View>
                <View style={styles.containerTwoButton} dataSet={{ media: ids.containerTwoButton }}
                >
                    <View
                        style={styles.subContainerButtons}
                        dataSet={{ media: ids.subContainerButtons }}
                    >
                        <ButtonValidateNavigation
                            name="Valider"
                            navigation={() => navigation.navigate('Votre activité')}
                            accessibilityLabel="Valider le paiement"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


