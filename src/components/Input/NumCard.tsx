import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';

const styles = StyleSheet.create({
    inputContainer: {
        gap:8
    }
});

type NumCardProp = {
    numberCard: string;
    onChangeNumberCard: (numberCard:string) => void;
    error?: string;
};

export default function NumCard ({ numberCard, onChangeNumberCard, error }: NumCardProp){
    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Numéro de carte"
                placeholder="Entrez votre numéro de carte"
                value={numberCard}
                onChangeText={onChangeNumberCard}
                keyboardType="numeric"
                autoComplete='cc-number'
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};