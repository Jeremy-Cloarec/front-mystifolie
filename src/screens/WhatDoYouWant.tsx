import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mainStyle } from '../mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation';
import NavigationBack from '../components/NavigationBack';
import Title from '../components/Title';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMain: {
        // paddingHorizontal: 16,
        paddingVertical: 16,
        width: "100%",
    },
    containerMainContent: {
        flexGrow: 0.8,
        justifyContent: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        // width: "100%",
    },
    containerTwoButton: {
        gap:12,
        flex: 1,
        width: "100%",
        maxWidth:900,
        alignItems: 'center',
    }
})

export default function WhatDoYouWant() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

    const margin = 62
    const marginSide = margin/2 



    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <NavigationBack />
            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]}>
                <View style={styles.containerMainContent}>
                    <Title content="Que souhaitez-vous faire ?" />
                </View>
                <View style={styles.containerTwoButton}>
                    <View style={[styles.containerButton, {width: screenWidth - marginSide}]}>
                        <ButtonValidateNavigation
                            name="S'inscrire"
                            navigation={() => navigation.navigate('Connection')}
                            backC={mainStyle.bgViolet4}
                            color={mainStyle.colorDark}
                        />
                    </View>
                    <View style={[styles.containerButton, {width: screenWidth - marginSide}]}>
                        <ButtonValidateNavigation
                            name="Se connecter"
                            navigation={() => navigation.navigate('Inscription')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


