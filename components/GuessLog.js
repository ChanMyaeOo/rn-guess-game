import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

function GuessLog({ guessRound, guessNumber}) {
    return(
        <View style={styles.guessItem}>
            <Text># {guessRound}</Text>
            <Text>Opponent's Guess {guessNumber}</Text>
        </View>
    )
}

export default GuessLog

const styles = StyleSheet.create({
    guessItem: {
        backgroundColor: Colors.secondary300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        marginVertical: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Colors.primary500,
        elevation: 2
    }
})