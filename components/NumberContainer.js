import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
function NumberContainer({ children }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary300,
        padding: 10,
        margin: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.secondary300
    }
})