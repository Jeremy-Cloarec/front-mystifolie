// import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    "Home": undefined;
    "Que souhaitez-vous faire ?": undefined;
    "Inscription": undefined;
    "Connection": undefined;
    "Commencer": undefined;
    "Choisissez votre formule": undefined;
    "Vous fêtez un événement ?": undefined;
    "Choisissez votre type d'activité": undefined;
    "Choisissez votre date": undefined;
    "Quel est votre fourchette de prix ?": undefined;
    "Où voulez-vous allez ?": undefined;
    "Combien serez-vous ?": undefined;
    "Paiement": undefined;
    "Votre activité": undefined;
    "Compte": undefined;
    "Boite mystère": undefined;
    "Partnairs": undefined;
};

// export type NavigationProp = StackNavigationProp<RootStackParamList>;

export interface NavigationProps {
    navigationNext?: () => void;
    navigationPrevious?: () => void;
}
