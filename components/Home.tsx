import { View, StyleSheet } from 'react-native';
import { mainStyle } from '../mainStyles';
import Header from './Header';
import ButtonCard from './HomeButton';

const styles = StyleSheet.create({
    containerButtonCard : {
        gap: 16,
        flexDirection: 'row',

        flexWrap: 'wrap',
    }
})

export default function Home() {
    return (
        <View style={mainStyle.container}>
            <View>
                <Header />
            </View>
            <View style={styles.containerButtonCard}>
                <ButtonCard name="Créez votre activité mystère" />
                <ButtonCard name="Vos activités" />
                <ButtonCard name="Offrez une boite mystère" />
                <ButtonCard name="Nos partenaires" />
            </View>
        </View>
    )
}