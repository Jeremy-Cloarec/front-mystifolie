import React, { useState } from 'react'
import { View, Text } from 'react-native'
import StyleSheet from 'react-native-media-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mainStyle } from '../mainStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation';
import ButtonValidateNavigation from '../components/Buttons/ButtonValidateNavigation';
import NavigationBack from '../components/NavigationBack';
import InputText from '../components/Input/InputText';
import Title from '../components/Title';

const { ids, styles } = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    containerMain: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        width: "100%",
        margin: "auto",
        '@media (min-width: 768px)': {
            marginTop: 32,
            marginBottom: 32,
            borderRadius: 12,
            maxWidth: 500,
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
    },
    containerMainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    containerTwoButton: {
        width: "100%",
        gap: 12,
    },
    subContainerButtons: {
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
            navigation.navigate('Commencer');
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <NavigationBack />
            <View style={[styles.body, mainStyle.bgOrange5, styles.containerMain]} dataSet={{ media: ids.containerMain }}>
                <View
                    style={styles.containerMainContent}
                    dataSet={{ media: ids.containerMainContent }}>
                    <Title content="Connexion" />
                </View>
                <View style={styles.containerTwoButton} dataSet={{ media: ids.containerTwoButton }}
                >
                    <View
                        style={styles.subContainerButtons}
                        dataSet={{ media: ids.subContainerButtons }}
                    >
                        <InputText
                            label="Votre email"
                            placeholder="Entrez votre email"
                            value={email}
                            onChangeText={onChangeEmail}
                            keyboardType="email-address"
                        />
                        {errors.email && <Text>{errors.email}</Text>}

                        <InputText
                            label="Votre mot de passe"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChangeText={onChangePassword}
                            secureTextEntry={!showPassword}
                            onToggleSecureTextEntry={toggleShowPassword}
                        />
                        {errors.password && <Text>{errors.password}</Text>}

                        <ButtonValidateNavigation
                            name="Se connecter"
                            navigation={() => handleNavigation()}
                            accessibilityLabel="Valider la connexion"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


