import React, { useState } from 'react'
import { View, Text } from 'react-native'
import StyleSheet from 'react-native-media-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import axios from 'axios';
import { RootStackParamList } from '../types/navigation';
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation';
import NavigationBack from '../components/NavigationBack';
import Title from '../components/Title';
import EmailInput from '../components/Input/EmailInput';
import PasswordInput from '../components/Input/PasswordInput';
import FormContainer from '../components/Input/FormContainer';
import NameInput from '../components/Input/NameInput';

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
    name?: string;
    email?: string;
    password?: string;
};

export default function Connexion() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [email, onChangeEmail] = useState('');
    const [name, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');
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


        if (!name) {
            errors.name = "Veuillez renseigner votre nom";
        }

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

    const handleNavigation = async () => {
        const apiUrl = process.env.NODE_ENV === 'production'
            ? process.env.API_URL_PROD + '/auth/register'
            : process.env.API_URL_DEV + '/auth/register';

        if (validateForm()) {
            try {
                const response = await axios.post(apiUrl , {
                    nom: name,
                    mail: email,
                    mdp: password
                });
                if (response.status === 201) {
                    console.log('Inscription réussie:', response.data);
                    navigation.navigate('Connection');
                } else {
                    console.log('Erreur lors de l\'inscription:', response.data);
                }
            } catch (error:any) {
                console.error('Erreur lors de l\'inscription:', error.response.data.message);
                let errors: ErrorsData = {};
                errors.email = "L'email est déjà utilisé";
            }
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
                    <NameInput name={name} onChangeName={onChangeName} error={errors.name} />
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


