import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';

const styles = StyleSheet.create({
    inputContainer: {
        gap: 8,
        flex: 1
    }
});

type YearCardProp = {
    YearCard: string;
    onChangeYearCard: (YearCard: string) => void;
    error?: string;
};

export default function YearCard({ YearCard, onChangeYearCard, error }: YearCardProp) {
    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Année d'expiration"
                placeholder="Entrez l'année"
                value={YearCard}
                onChangeText={onChangeYearCard}
                keyboardType="numeric"
                autoComplete='cc-exp-year'
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};