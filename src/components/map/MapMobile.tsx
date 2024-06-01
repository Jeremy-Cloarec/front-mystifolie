import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    containerMap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    addressContainer: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    addressText: {
        fontSize: 16,
    },
});

export default function MapMobile() {
    // Coordonnées initiales de Lyon
    const initialRegion = {
        latitude: 45.764043,
        longitude: 4.835659,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    // État pour stocker les coordonnées du marqueur et l'adresse
    const [marker, setMarker] = useState(null);
    const [address, setAddress] = useState('');

    // Fonction pour obtenir l'adresse à partir des coordonnées
    const getAddressFromCoordinates = async (latitude : number, longitude: number) => {
        const apiKey = 'AIzaSyC0lSvyZEKWb2Q1xaG8TRXFLI-ba4SzC6I';
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                return data.results[0].formatted_address;
            } else {
                return 'Adresse non trouvée';
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'adresse:', error);
            return 'Erreur lors de la récupération de l\'adresse';
        }
    };

    // Gestion du clic sur la carte pour ajouter un marqueur
    const handleMapPress = async (event: any) => {
        const { coordinate } = event.nativeEvent;
        setMarker(coordinate);
        console.log('Coordonnées du marqueur:', coordinate);

        // Obtenir l'adresse à partir des coordonnées
        const address = await getAddressFromCoordinates(coordinate.latitude, coordinate.longitude);
        setAddress(address);
        console.log('Adresse:', address);
    };

    return (
        <View style={styles.containerMap}>
            <MapView
                style={{ width: '100%', height: '100%' }}
                initialRegion={initialRegion}
                onPress={handleMapPress}
            >
                {marker && (
                    <Marker coordinate={marker} />
                )}
            </MapView>
            {address && (
                <View style={styles.addressContainer}>
                    <Text style={styles.addressText}>{address}</Text>
                </View>
            )}
        </View>
    );
}
