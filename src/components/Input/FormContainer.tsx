import React from 'react';
import { View } from 'react-native';
import StyleSheet from 'react-native-media-query';
import { mainStyle } from '../../mainStyles';

const { ids, styles } = StyleSheet.create({
    body: {
        flex:1 ,
        width: "100%",
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
});

const FormContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <View
            style={[
                styles.body, 
                mainStyle.bgOrange5, 
                styles.containerMain]}
            dataSet={{ media: ids.containerMain }}>
            <View 
                style={styles.containerMainContent} 
                dataSet={{ media: ids.containerMainContent }}>
                {children}
            </View>
        </View>
    );
};

export default FormContainer;
