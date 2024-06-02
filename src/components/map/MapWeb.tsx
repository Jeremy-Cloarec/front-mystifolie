import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import loadGoogleMapsAPI from "./webMapComponent.js";

let MapView = require("@preflower/react-native-web-maps").default;

interface MapWebProps {
    marker: { latitude: number; longitude: number } | null;
    setMarker: any;
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
}

interface State {
    googleMapsLoaded: boolean;
    region: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
    markerCoords: {
        latitude: number;
        longitude: number;
    } | null;
    address: string;
}

const MapWeb: React.FC<MapWebProps> = ({ marker, setMarker, address, setAddress }) => {
    const [googleMapsLoaded, setGoogleMapsLoaded] = useState<boolean>(false);
    const [region, setRegion] = useState<State["region"]>({
        latitude: 45.764043,
        longitude: 4.835659,
        latitudeDelta: 0.05,
        longitudeDelta: 0.045,
    });
    const [markerCoords, setMarkerCoords] = useState<State["markerCoords"]>(null);

    useEffect(() => {
        loadGoogleMapsAPI(() => {
            setGoogleMapsLoaded(true);
        });
    }, []);

    const handleMapPress = async (event: any) => {
        const { coordinate } = event.nativeEvent;
        setMarkerCoords(coordinate);
        setMarker(coordinate); // Mettre à jour le marker du parent

        // Obtenir l'adresse à partir des coordonnées
        const address = await getAddressFromCoordinates(coordinate.latitude, coordinate.longitude);
        setAddress(address); // Mettre à jour l'adresse du parent
        console.log("Adresse:", address);
    };

    const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
        const apiKey = process.env.MAP_API;
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

    return (
        <View style={styles.container}>
            {googleMapsLoaded ? (
                <>
                    <MapView
                        style={styles.map}
                        initialRegion={region}
                        zoomEnabled={true}
                        zoomControlEnabled={true}
                        mapType="terrain"
                        showsPointsOfInterest={false}
                        onPress={handleMapPress}
                    >
                        {markerCoords && (
                            <MapView.Marker coordinate={markerCoords} />
                        )}
                    </MapView>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

    addressText: {
        fontSize: 16,
    },
});

export default MapWeb;
