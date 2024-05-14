import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    "Home": undefined;
    "Choisissez votre formule": undefined;
    "Vous fêtez un événement ?": undefined;
    "Choisissez votre type d'activité": undefined;
    "Choisissez votre date": undefined;
    "Quel est votre fourchette de prix ?": undefined;
    "Où voulez-vous allez ?": undefined;
    "Combien serez-vous ?": undefined;
    "Connectez-vous": undefined;
    "Paiement": undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;

export interface NavigationProps {
    navigationNext: () => void;
}