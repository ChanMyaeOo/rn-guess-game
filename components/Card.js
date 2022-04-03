import { View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
function Card({ children }) {
    return(
        <View style={styles.inputContainer}>
            {
                children
            }
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.primary300,
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 8,
        padding: 10,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
})