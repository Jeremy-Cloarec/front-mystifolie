import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        gap:8
    }
});

type NameInputProp = {
    numberCard: string;
    onChangeNumberCard: (numberCard:string) => void;
    error?: string;
};

export default function CardInput ({ numberCard, onChangeNumberCard, error }: NameInputProp){
    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Numéro de carte"
                placeholder="Entrez votre numéro de carte"
                value={numberCard}
                onChangeText={onChangeNumberCard}
                keyboardType="numeric"
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};