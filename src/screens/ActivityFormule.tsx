import React, { useState } from 'react';
import Stepper from '../components/Stepper/Stepper';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import StyleSheet from 'react-native-media-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dataStepper } from '../components/Stepper/dataStepper';
import { mainStyle } from '../mainStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation';
import SelectView from '../components/Input/SelectView';
import { FlatList } from 'react-native';

const steps = [
    { todo: false, doing: true, done: false },
    { todo: true, doing: false, done: false },
    { todo: true, doing: false, done: false },
    { todo: true, doing: false, done: false },
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
        gap: 12,
        width: "100%",
    },
    containerTwoButton: {
        width: "100%",
        gap: 12,
    },
    subContainerButtons: {
        flexDirection: 'row',
    },
    flatList: {
        width: "100%"
    },
    error: {
        marginBottom: 12
    }
})

type ItemData = {
    id: string;
    formule: string;
    detail: string;
};

const formulesObject: ItemData[] = [
    {
        id: "1",
        formule: 'Formule 1',
        detail: "Petit-déjeuner, activité,  restaurant"
    },
    {
        id: "2",
        formule: 'Formule 2',
        detail: "Déjeuner, activité"
    },
    {
        id: "3",
        formule: 'Formule 3',
        detail: "Petit-déjeuner, activité"
    },
    {
        id: "4",
        formule: 'Formule 4',
        detail: "Activité,  restaurant"
    },
];

type ItemProps = {
    item: ItemData;
    onPress: () => void;
};


export default function ActivityFormule() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);


    const handlePress = (id: string) => {
        setSelectedId(id);
        setError(null);
    };


    const handleValidationPress = () => {
        if (!selectedId) {
            setError('Veuillez sélectionner une formule avant de continuer.');
        } else {
            const selectedFormule = formulesObject.find(item => item.id === selectedId);
            if (selectedFormule) {
                console.log(`Selected Formule: ${selectedFormule.formule}`);
            }
            navigation.navigate('Vous fêtez un événement ?');
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={0}
            />

            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                <FlatList
                    data={formulesObject}
                    renderItem={({ item }) => (
                        <SelectView
                            formule={item.formule}
                            detail={item.detail}
                            borderColor={item.id === selectedId ? '#58347C' : '#CCC2D7'}
                            handlePress={() => handlePress(item.id)}
                        />
                    )}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                    contentContainerStyle={styles.containerMainContent}
                />

                {error && <Text style={styles.error}>{error}</Text>}

                <View style={styles.containerTwoButton} dataSet={{ media: ids.containerTwoButton }}
                >
                    <View
                        style={styles.subContainerButtons}
                        dataSet={{ media: ids.subContainerButtons }}
                    >
                        <ButtonValidateNavigation
                            name="Valider"
                            navigation={handleValidationPress}
                            accessibilityLabel="Valider la formule"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


