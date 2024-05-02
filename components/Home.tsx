import { View, Text } from 'react-native';
import { styles } from '../styles';
import Header from './Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}