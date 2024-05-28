import React, { useState } from 'react';
import Stepper from '../components/Stepper/Stepper';
import { Text, View } from 'react-native';
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
    { todo: false, doing: false, done: true },
    { todo: false, doing: false, done: true },
    { todo: false, doing: true, done: false },
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
        marginHorizontal: -8,
    },
    containerTwoButton: {
        width: "100%",
        gap: 12,
    },
    subContainerButtons: {
        flexDirection: 'column',
    },
    flatList: {
        width: "100%",
        flexDirection: 'column',
    },
    error: {
        marginBottom: 12
    },
    itemContainer: {
        flex: 1,
        margin:8,
    }
})

type ItemData = {
    id: string;
    title: string;
    subtitle?: string;
};

const typesObject: ItemData[] = [
    {
        id: "1",
        title: 'Horreur',
    },
    {
        id: "2",
        title: 'Aventure',
    },
    {
        id: "3",
        title: 'Romantique',
    },
    {
        id: "4",
        title: 'Fantastique',
    },
    {
        id: "5",
        title: 'Culinaire',
    },
    {
        id: "6",
        title: 'Policier',
    },
];

export default function ActivityFormule() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Function to handle the press event on a SelectView item.
    // Updates the state of selectedIds based on the item's id.
    const handlePress = (id: string) => {
        // Check if the id is already in the selectedIds array.
        const index = selectedIds.indexOf(id);
        
        // If the id is not in the array, add it.
        if (index === -1) {
            // Create a new array by spreading the existing array and adding the new id.
            setSelectedIds([...selectedIds, id]);
        } 
        // If the id is already in the array, remove it.
        else {
            // Create a new array by spreading the existing array.
            // Then, use the splice method to remove the item at the given index.
            const updatedIds = [...selectedIds];
            updatedIds.splice(index, 1);
            // Update the state with the new array.
            setSelectedIds(updatedIds);
        }
        // Reset the error state.
        setError(null);
    };

    // Function to handle the press event on the "Valider" button.
    // Checks if any formule has been selected.
    // If no formule is selected, sets an error message.
    // If at least one formule is selected, filters the typesObject array to only include the selected formules.
    // Logs the titles of the selected formules to the console.
    // Navigates to the "Choisissez votre type d'activité" screen.
    const handleValidationPress = () => {
        // Check if no formule has been selected.
        if (selectedIds.length === 0) {
            // Set an error message.
            setError('Veuillez sélectionner au moins un type d\'activité avant de continuer.');
        } 
        // If at least one formule is selected.
        else {
            // Filter the typesObject array to only include the selected formules.
            // The filter function creates a new array that includes only the elements that pass the test implemented by the provided function.
            // In this case, the test is whether the item's id is included in the selectedIds array.
            // The function returns a new array containing the selected formules.
            const selectedFormules = typesObject.filter(item => selectedIds.includes(item.id));
            
            // Log the titles of the selected formules to the console.
            // The map function creates a new array with the results of calling a provided function on every element in the calling array.
            // In this case, the function is called on each formule in the selectedFormules array and returns the formule's title.
            // The resulting array is logged to the console.
            console.log('Selected type(s):', selectedFormules.map(formule => formule.title));
            
            // Navigate to the "Choisissez votre type d'activité" screen.
            navigation.navigate('Choisissez votre date');
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <Stepper
                steps={steps}
                stepsData={stepsData}
                indexArray={2}
            />

            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                <FlatList
                    data={typesObject}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <SelectView
                                title={item.title}
                                fontSize={20}
                                borderColor={selectedIds.includes(item.id) ? '#58347C' : '#CCC2D7'}
                                handlePress={() => handlePress(item.id)}
                                
                            />
                        </View>
                    )}
                    numColumns={2}
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
                            accessibilityLabel="Valider votre ou vos type-s d'activité-s"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


