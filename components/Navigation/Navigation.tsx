import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { mainStyle } from '../../mainStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
import { NavigationProps } from '../../types/navigation'

const styles = StyleSheet.create({
    navigation: {
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navigationPressable: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        height: "100%"
    },
    iconPressable: {
        width: 10,
        height: 18,
    }
})
export default function Navigation({ navigationNext }: NavigationProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={[styles.navigation, mainStyle.bgViolet1]}>
            <Pressable
                style={styles.navigationPressable}
                onPress={() => navigation.goBack()}
            >
                <Image style={styles.iconPressable} source={require('../../assets/icons/back.png')} />
                <Text style={mainStyle.colorWhite}>Retour</Text>
            </Pressable>
            <Pressable
                onPress={navigationNext}
                style={styles.navigationPressable}
            >
                <Text style={mainStyle.colorWhite}>Suivant</Text>
                <Image style={styles.iconPressable} source={require('../../assets/icons/next.png')} />
            </Pressable>
        </View>
    )
}