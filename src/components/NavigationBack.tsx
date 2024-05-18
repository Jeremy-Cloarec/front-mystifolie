import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import StyleSheet from 'react-native-media-query'
import { mainStyle } from '../mainStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList, NavigationProps } from '../types/navigation'

const { ids, styles } = StyleSheet.create({
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
      
        '@media (min-width: 768px)': {
            maxWidth: 500,
            paddingHorizontal: 16,
        },
    },
    iconPressable: {
        width: 10,
        height: 18,
        opacity: 0.8
    },

    textPressable: {    
        fontSize: 16,
        textAlign: 'center',
        opacity: 0.8
    }
})
export default function NavigationBack() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={[styles.navigation, mainStyle.bgViolet1]}>
            <Pressable
                style={styles.navigationPressable}
                dataSet={{ media: ids.navigationPressable }}
                onPress={() => navigation.goBack()}
            >
                <Image style={styles.iconPressable} source={require('../../assets/icons/back.png')} />
                <Text style={[mainStyle.colorWhite, mainStyle.utendoRegular, styles.textPressable]}>Retour</Text>
            </Pressable>
        </View>
    )
}