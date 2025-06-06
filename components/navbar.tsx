import {Text, View, Pressable, StyleSheet} from 'react-native'
import {useRouter} from 'expo-router';

const duration: number = 0;

export default function NavBar() {
    const router = useRouter();
    return (
        <View style={styles.navBarContainer}>
            <Pressable style={styles.button} onPress={() => router.navigate('./scenario')}>
                <Text style={styles.buttonText}>Scenario</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => router.navigate('./start')}>
                <Text style={styles.buttonText}>Start</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => router.navigate('./standalonedevicesync')}>
                <Text style={styles.buttonText}>device sync</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => router.navigate('./manualacquisition')}>
                <Text style={styles.buttonText}>acquisition</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    navBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5E5E5E',
        padding: 10,
    },

    button: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
