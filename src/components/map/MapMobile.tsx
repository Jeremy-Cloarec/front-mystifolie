import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    containerMap: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});

export default function MapMobile() {
    if (Platform.OS === 'web') {
        return (
            <View style={styles.containerMap}>
                <Text>Map is not available on web</Text>
            </View>
        );
    }

    return (
        <View style={styles.containerMap}>
            <Text>Map Mobile</Text>
            <MapView style={{ width: '100%', height: '100%' }} />
        </View>
    );
}
