import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { mainStyle } from '../mainStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList, NavigationProps } from '../types/navigation'

const styles = StyleSheet.create({
    navigation: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navigationPressable: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        height: "100%",
        width: "100%",
        maxWidth: 900,
    },
    iconPressable: {
        width: 10,
        height: 18,
    },

    textPressable: {    
        fontSize: 16,
        textAlign: 'center',

    }

})
export default function NavigationBack() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={[styles.navigation, mainStyle.bgViolet1]}>
            <Pressable
                style={styles.navigationPressable}
                onPress={() => navigation.goBack()}
            >
                <Image style={styles.iconPressable} source={require('../../assets/icons/back.png')} />
                <Text style={[mainStyle.colorWhite, mainStyle.utendoRegular]}>Retour</Text>
            </Pressable>
        </View>
    )
}