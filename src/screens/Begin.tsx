import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mainStyle } from '../mainStyles'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMainButton: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    containerMainContent: {
        flex: 1,
        justifyContent: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
    }
})

export default function ActivityTypeScreen() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMainButton]}>
                <View style={styles.containerMainContent}>
                <ButtonValidateNavigation
                        name="Commencer"
                        navigation={() => navigation.navigate("Choisissez votre date")}
                        backC={mainStyle.bgViolet4}
                        color={mainStyle.colorDark}
                    />
                </View>
            </View>
        </View>
    )
}


