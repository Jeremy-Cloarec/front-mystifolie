import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        gap:8
    }
});

type EmailInputProps = {
    email: string;
    onChangeEmail: (email: string) => void;
    error?: string;
};

export default function EmailInput ({ email, onChangeEmail, error }: EmailInputProps){
    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Votre email"
                placeholder="Entrez votre email"
                value={email}
                onChangeText={onChangeEmail}
                keyboardType="email-address"
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};
