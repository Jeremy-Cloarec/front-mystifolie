import { useState, useEffect } from 'react';
import Stepper from '../components/Stepper/Stepper'
import { Text, View, Platform } from 'react-native'
import StyleSheet from 'react-native-media-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dataStepper } from '../components/Stepper/dataStepper'
import { mainStyle } from '../mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation'
import MapMobile from '../components/map/MapMobile';
import MapWeb from '../components/map/MapWeb';

const steps = [
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: true, done: false },
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
    },
    containerMain: {
        width: "100%",
        margin: "auto",
        borderRadius: 12,
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
        alignItems: 'center',
        width: "100%",
    },
    containerTwoButton: {
        width: "100%",
        gap: 12,
    },
    subContainerButtons: {
        padding: 16,
        gap: 12,

    },
    containerAdressText: {
        gap: 6,
        paddingVertical: 6,
    },
    error: {
        paddingTop: 12
    }
})

export default function ActivityFormuleScreen() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (address !== undefined) {
            setError('');
        }
    }, [address]);

    const handleValidationPress = () => {
        if (address === "") {
            setError('Veuillez sélectionner un point sur la carte avant de continuer.');
        } else {
            console.log(`Selected Formule: ${address}`);
            navigation.navigate('Combien serez-vous ?');
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={5}
            />

            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                {Platform.OS !== 'web' ?
                    (<View
                        style={styles.containerMainContent}
                        dataSet={{ media: ids.containerMainContent }}>
                        <MapMobile
                            marker={marker}
                            setMarker={setMarker}
                            address={address}
                            setAddress={setAddress}
                        />
                    </View>
                    )
                    :
                    (<View
                        style={styles.containerMainContent}
                        dataSet={{ media: ids.containerMainContent }}>
                        <MapWeb
                            marker={marker}
                            setMarker={setMarker}
                            address={address}
                            setAddress={setAddress}
                        />
                    </View>)
                }

                {error && <Text style={styles.error}>{error}</Text>}

                <View style={styles.containerTwoButton} dataSet={{ media: ids.containerTwoButton }}
                >
                    <View
                        style={styles.subContainerButtons}
                        dataSet={{ media: ids.subContainerButtons }}
                    >
                        <View style={styles.containerAdressText}>
                            <Text style={[mainStyle.text, mainStyle.utendoMedium]}>Adresse sélectionnée : </Text>
                            {address ? (
                                <Text style={mainStyle.utendoRegular}>{address}</Text>
                            ) : (
                                <Text style={mainStyle.utendoRegular}>Selectionnez une adresse sur la carte</Text>
                            )
                            }
                        </View>
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


