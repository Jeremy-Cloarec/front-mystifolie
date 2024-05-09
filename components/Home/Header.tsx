import {Text, StyleSheet } from 'react-native';
import { mainStyle } from '../../mainStyles';

const styles = StyleSheet.create({
    h1: {
        textAlign: "center",
    }

})
export default function Header() {

    return (
        <Text style={[mainStyle.h1, styles.h1]}>Rompez avec la routine !</Text>
    )
}