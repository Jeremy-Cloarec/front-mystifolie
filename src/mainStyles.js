import { StyleSheet } from 'react-native';

export const mainStyle = StyleSheet.create({

    // Global
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        maxWidth: 1024,
        padding: 25,
        flex: 1,
    },
    h1: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    filterText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    filterNextText: {
        fontSize: 14,
    },
    text: {
        fontSize: 20,
    },

    // Typography
    utendoRegular: {
        fontFamily: 'Utendo-Regular',
    },

    utendoMedium: {
        fontFamily: 'Utendo-Medium',
    },

    // Color
    colorDark: {
        color: '#08050C',
    },
    colorWhite: {
        color: '#FFFFFF',
    },
    colorViolet1: {
        color: '#58347C',
    },
    colorViolet2: {
        color: '#684889',
    },
    colorViolet3: {
        color: '#8A70A3',
    },
    colorViolet4: {
        color: '#CCC2D7',
    },
    colorViolet5: {
        color: '#DDD6E4',
    },
    colorViolet6: {
        color: '#EEEAF1',
    },

    // Background-color
    bgDark: {
        color: '#08050C',
    },
    bgWhite: {
        color: '#FFFFFF',
    },
    bgViolet1: {
        backgroundColor: '#58347C',
    },
    bgViolet2: {
        backgroundColor: '#684889',
    },
    bgViolet3: {
        backgroundColor: '#8A70A3'
    },
    bgViolet4: {
        backgroundColor: '#CCC2D7'
    },
    bgViolet5: {
        backgroundColor: '#DDD6E4'
    },
    bgViolet6: {
        backgroundColor: '#EEEAF1'
    },
    bgOrange5: {
        backgroundColor: '#FFF7F4'
    },
});
