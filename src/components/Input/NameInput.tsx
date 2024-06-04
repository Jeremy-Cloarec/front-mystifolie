import { View, Text, StyleSheet } from 'react-native';
import InputText from './InputText';

const styles = StyleSheet.create({
    inputContainer: {
        gap:8
    }
});

type NameInputProp = {
    name: string;
    onChangeName: (name: string) => void;
    error?: string;
};

export default function NameInput ({ name, onChangeName, error }: NameInputProp){
    return (
        <View style={styles.inputContainer}>
            <InputText
                label="Votre nom"
                placeholder="Entrez votre nom"
                value={name}
                onChangeText={onChangeName}
                keyboardType="name"
                autoComplete='name'
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};