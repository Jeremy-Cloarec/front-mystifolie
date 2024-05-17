import React from 'react'
import { View, StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import { mainStyle } from '../../mainStyles';
import Header from './Header';
import HomeButton from '../Buttons/HomeButton';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from 'react';

const itemData = [
    {
        name: "Créez votre activité mystère",
    },
    {
        name: "Vos activités",
    },
    {
        name: "Offrez une boite mystère",
    },
    {
        name: "Nos partenaires",
    },
]

const styles = StyleSheet.create({
    containerButtonCard: {
        width: "100%",
        flexGrow: 1,
    },
    containerContainerB: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default function Home() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={mainStyle.container}>
            <View style={mainStyle.subContainer} >
                <View style={styles.containerHeader}>
                    <Header />
                </View>
                <View style={styles.containerContainerB}>
                    <FlatList
                        data={itemData}
                        numColumns={2}
                        renderItem={({ item, index }) => <HomeButton
                            name={item.name}
                            backC={index === 0 ? mainStyle.bgViolet1 : null}
                            colo={index === 0 ? mainStyle.colorWhite : null}
                            navigation={() => navigation.navigate("Choisissez votre formule")}
                        />}
                        keyExtractor={item => item.name}
                        style={styles.containerButtonCard}
                    >
                    </FlatList>
                </View>
            </View>
        </SafeAreaView>
    )
}
