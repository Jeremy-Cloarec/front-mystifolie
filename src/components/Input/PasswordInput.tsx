import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        gap: 8
    }
});

type PasswordInputProps = {
    testID?: string;
    password: string;
    onChangePassword: (password: string) => void;
    showPassword: boolean;
    toggleShowPassword: () => void;
    error?: string;
};

export default function PasswordInput({ password, onChangePassword, showPassword, toggleShowPassword, error, testID }: PasswordInputProps) {
    return (
        <View style={styles.inputContainer}>
            <InputText
                testID= "password-input"
                label="Votre mot de passe"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChangeText={onChangePassword}
                secureTextEntry={!showPassword}
                onToggleSecureTextEntry={toggleShowPassword}
                autoComplete='current-password'
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};