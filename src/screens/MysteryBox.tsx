import React, { useState } from 'react'
import { View } from 'react-native'
import StyleSheet from 'react-native-media-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mainStyle } from '../mainStyles'
import NavigationBack from '../components/NavigationBack';
import Title from '../components/Title';

const { ids, styles } = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        padding: 25,
    },
    containerMain: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: "100%",
        margin: "auto",
        '@media (min-width: 768px)': {
            marginTop: 32,
            marginBottom: 32,
            borderRadius: 12,
            maxWidth: 500,
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
    },
    containerMainContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: "100%",
    },
    containerTwoButton: {
        width: "100%",
        gap: 12,
    },
    subContainerButtons: {
        flexDirection: 'row',
    }
})

export default function MysteryBox() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <NavigationBack />
            <View style={[styles.body, mainStyle.bgViolet1, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                <View
                    style={styles.containerMainContent}
                    dataSet={{ media: ids.containerMainContent }}>
                    <Title 
                        content="Boite mystère"
                        color={mainStyle.colorWhite}
                    />
                </View>
            </View>
        </View>
    )
}


