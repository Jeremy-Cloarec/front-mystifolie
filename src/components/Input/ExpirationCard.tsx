import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';


const styles = StyleSheet.create({
    inputContainer: {
        gap: 8,
        flex: 1
    }
});

type YearCardProp = {
    monthCard: string;
    onChangeMonthCard: (numberCard: string) => void;
    handleChange: (value: string) => void;
    handleBlur: () => void;
    inputError?: string;
};

export default function ExpirationCard({ monthCard, onChangeMonthCard, handleChange, handleBlur, inputError }: YearCardProp) {
    

    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Date d'expiration"
                placeholder="MM/YY"
                value={monthCard}
                onChangeText={handleChange}
                onBlur={handleBlur}
                keyboardType="numeric"
                autoComplete='cc-exp-month'
            />
            {inputError && <Text>{inputError}</Text>}
        </View>
    );
};