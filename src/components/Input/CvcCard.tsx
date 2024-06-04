import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';

const styles = StyleSheet.create({
    inputContainer: {
        gap:8,
        flex: 1,
    }
});

type CsCardProp = {
    cscCardNumber: string;
    onChangeCscCardNumber: (numberCard:string) => void;
    error?: string;
};

export default function CvcCard ({ cscCardNumber: cvcCardNumber, onChangeCscCardNumber: onChangeCvcCardNumber, error }: CsCardProp){
    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Cvc"
                placeholder="Cvc"
                value={cvcCardNumber}
                onChangeText={onChangeCvcCardNumber}
                keyboardType="numeric"
                autoComplete='cc-csc'
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};