import React, { useState } from 'react'
import { View, Text } from 'react-native'
import StyleSheet from 'react-native-media-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation';
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation';
import NavigationBack from '../components/NavigationBack';
import Title from '../components/Title';
import EmailInput from '../components/Input/EmailInput';
import PasswordInput from '../components/Input/PasswordInput';
import FormContainer from '../components/Input/FormContainer';

const { ids, styles } = StyleSheet.create({
    containerTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    containerForm: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 24,
    },
})

type ErrorsData = {
    email?: string;
    password?: string;
};

export default function Connexion() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<ErrorsData>({});

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length >= 4;
    };

    const validateForm = () => {
        let errors: ErrorsData = {};

        if (!email) {
            errors.email = "Veuillez renseigner votre email";
        } else if (!validateEmail(email)) {
            errors.email = "L'email n'est pas valide";
        }

        if (!password) {
            errors.password = "Veuillez renseigner votre mot de passe";
        } else if (!validatePassword(password)) {
            errors.password = "Le mot de passe doit contenir au moins 4 caractères";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleNavigation = () => {
        if (validateForm()) {
            navigation.navigate('Connection');
        }
    };

    return (
        <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <NavigationBack />
            <FormContainer>
                <View style={styles.containerTitle}>
                    <Title content="S'inscrire" />
                </View>
                <View style={styles.containerForm}>
                    <EmailInput email={email} onChangeEmail={onChangeEmail} error={errors.email} />
                    <PasswordInput
                        password={password}
                        onChangePassword={onChangePassword}
                        showPassword={showPassword}
                        toggleShowPassword={toggleShowPassword}
                        error={errors.password}
                    />
                    <ButtonValidateNavigation
                        name="Se connecter"
                        navigation={handleNavigation}
                        accessibilityLabel="Valider l'inscription'"
                    />
                </View>
            </FormContainer>
        </View>
    )
}


