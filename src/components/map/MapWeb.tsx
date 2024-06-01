import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import loadGoogleMapsAPI from "./webMapComponent.js";

let MapView = require("@preflower/react-native-web-maps").default;

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
    address: string; // Ajouter l'état pour l'adresse
}

export default class MapWeb extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            googleMapsLoaded: false,
            region: {
                latitude: 45.764043, // Latitude de Lyon
                longitude: 4.835659, // Longitude de Lyon
                latitudeDelta: 0.05, // Ajuster cette valeur pour le niveau de zoom
                longitudeDelta: 0.045, // Ajuster cette valeur pour le niveau de zoom
            },
            markerCoords: null, // Initialiser les coordonnées du marqueur à null
            address: "", // Initialiser l'adresse à une chaîne vide
        };
    }

    componentDidMount() {
        loadGoogleMapsAPI(() => {
            this.setState({ googleMapsLoaded: true });
        });
    }

    handleMapPress = async (event: any) => {
        const { coordinate } = event.nativeEvent;
        this.setState({ markerCoords: coordinate });
        console.log("Coordonnées du marqueur:", coordinate);

        // Obtenir l'adresse à partir des coordonnées
        const address = await this.getAddressFromCoordinates(coordinate.latitude, coordinate.longitude);
        this.setState({ address });
        console.log("Adresse:", address);
    };

    getAddressFromCoordinates = async (latitude: number, longitude: number) => {
        const apiKey = "AIzaSyC0lSvyZEKWb2Q1xaG8TRXFLI-ba4SzC6I"; // Remplacez par votre clé API Google Maps
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

    render() {
        const { googleMapsLoaded, region, markerCoords, address } = this.state;

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
                            onPress={this.handleMapPress} // Ajouter le gestionnaire d'événements onPress
                        >
                            {markerCoords && (
                                <MapView.Marker coordinate={markerCoords} />
                            )}
                        </MapView>
                        {address && (
                            <View style={styles.addressContainer}>
                                <Text style={styles.addressText}>{address}</Text>
                            </View>
                        )}
                    </>
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        borderColor: "white",
        borderWidth: 8,
        borderTopWidth: 4,
        borderBottomWidth: 4,
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
