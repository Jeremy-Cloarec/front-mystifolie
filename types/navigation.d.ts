import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    "Home": undefined;
    "Choisissez votre type d'activité": undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;

export interface NavigationProps {
    navigationNext: () => void;
}