import { SetStateAction, useState } from 'react'
import Stepper from '../components/Stepper/Stepper'
import { Text, View, ScrollView } from 'react-native'
import StyleSheet from 'react-native-media-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { dataStepper } from '../components/Stepper/dataStepper'
import { mainStyle } from '../mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation'
import NumCard from '../components/Input/NumCard'
import NameInput from '../components/Input/NameInput'
import ExpirationCard from '../components/Input/ExpirationCard'
import CvcCard from '../components/Input/CvcCard'

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

    containerMain: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: "100%",
        margin: "auto",
        justifyContent: "center",
        gap: 16,
        '@media (min-width: 768px)': {
            marginTop: 32,
            marginBottom: 32,
            borderRadius: 12,
            maxWidth: 500,
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
    },
    containerMainContent: {
        flex: 1,
        width: "100%",
        gap: 16,
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

    const [onValidationError, setOnValidationError] = useState(false);


    function validateForm () {
        return true;
    }

    const handleNavigation = () => {
        if (validateForm()) {
            console.log(name, numberCard, cscCardNumber, monthCard);
            navigation.navigate('Votre activité');
        }
    };


    return (
        <ScrollView style={[styles.container, mainStyle.bgOrange5, { paddingTop: insets.top }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={7}
            />
            <View
                style={[styles.containerMain]}
                dataSet={{ media: ids.containerMain }}>
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
                        <ExpirationCard
                            monthCard={monthCard}
                            onChangeMonthCard={onChangeMonthCard}
                        />
                        <CvcCard
                            cscCardNumber={cscCardNumber}
                            onChangeCscCardNumber={onChangeCscCardNumber}
                        />
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
                            navigation={handleNavigation}
                            accessibilityLabel="Valider le paiement"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


