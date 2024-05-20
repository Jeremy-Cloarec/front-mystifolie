import React from 'react'
import { Image, View, Pressable } from 'react-native';
import StyleSheet from 'react-native-media-query'
import { mainStyle } from 'src/mainStyles';

const { ids, styles } = StyleSheet.create({
    containerNav: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
    },
    pressable: {
        paddingHorizontal:16,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        height: 50,
        '@media (min-width: 768px)': {
            maxWidth: 500,
        },
    },
    image: {
        height: 24,
        width: 24,
        resizeMode: "contain",
    }
})

type Props = {
    navigation: () => void;
}

export default function UserNav(props: Props) {
    return (
        <View style={[styles.containerNav, mainStyle.bgViolet1]}>
            <Pressable 
                style={styles.pressable}
                onPress={props.navigation}
                dataSet={{ media: ids.pressable }}
            >
                <Image
                    source={require('../../assets/icons/user.png')}
                    style={styles.image}
                />
            </Pressable>
        </View>
    )
}