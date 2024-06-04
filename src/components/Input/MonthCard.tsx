import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';
import { expirationDateFormatter } from '../../utils/formatters';

const styles = StyleSheet.create({
    inputContainer: {
        gap: 8,
        flex: 1
    }
});

type YearCardProp = {
    monthCard: string;
    onChangeMonthCard: (numberCard: string) => void;
    error?: string;
};

export default function MonthCoard({ monthCard, onChangeMonthCard, error }: YearCardProp) {

    const [inputValue, setInputValue] = useState(monthCard);
    const [inputError, setInputError] = useState(error);

    const handleChange = (text: string) => {
        const formattedText = expirationDateFormatter(inputValue, text);
        setInputValue(formattedText);
        onChangeMonthCard(formattedText);
    };

    const handleBlur = () => {
        validateInput(inputValue);
    };

    const validateInput = (text: string) => {
        const isValid = /^((0[1-9])|(1[0-2]))\/?([0-9]{2})$/.test(text);
        if (!isValid) {
            setInputError('Date invalide. Utilisez le format MM/YY.');
        } else {
            setInputError('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Mois d'expiration"
                placeholder="Entrez le mois"
                value={monthCard}
                onChangeText={handleChange}
                onBlur={handleBlur}
                keyboardType=""
                autoComplete='cc-exp-month'
            />
            {inputError && <Text>{inputError}</Text>}
        </View>
    );
};