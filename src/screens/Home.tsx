import React from 'react'
import { View, FlatList, SafeAreaView, Text } from 'react-native';
import StyleSheet from 'react-native-media-query';
import { mainStyle } from '../mainStyles'
import Header from '../components/Home/Header'
import HomeButton from '../components/Buttons/HomeButton'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import UserNav from '../components/UserNav';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ItemData = {
    name: string;
    link: keyof RootStackParamList;
};

const itemData: ItemData[] = [
    {
        name: "Offrez une boite mystère",
        link: "Boite mystère"
    },
    {
        name: "Créez votre activité mystère",
        link: "Que souhaitez-vous faire ?"
    },
]

const { ids, styles } = StyleSheet.create({
    containerMain: {
        flex: 1,
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
    containerButtonCard: {
        width: "100%",
        flexGrow: 1,
    },
    containerContainerB: {

        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
    },
    containerFlatList: {
        gap: 16
    }
})

export default function Home() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={[mainStyle.container, mainStyle.bgOrange5, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <UserNav navigation={() => navigation.navigate('Compte')} />
            <View 
                style={styles.containerMain}
                dataSet={{ media: ids.containerMain }}
            >
                <View style={mainStyle.subContainer} >
                    <View style={styles.containerHeader}>
                        <Header />
                    </View>
                    <View style={styles.containerContainerB}>
                        <FlatList
                            data={itemData}
                            numColumns={1}
                            renderItem={
                                ({ item, index }) =>
                                    <HomeButton
                                        name={item.name}
                                        backC={index === 1 ? mainStyle.bgViolet1 : null}
                                        colo={index === 1 ? mainStyle.colorWhite : null}
                                        navigation={() => navigation.navigate(item.link)}
                                    />
                            }
                            keyExtractor={item => item.name}
                            style={styles.containerButtonCard}
                            contentContainerStyle={styles.containerFlatList}
                        >
                        </FlatList>
                    </View>
                </View>
            </View>
        </View>
    )
}
