import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from '../constants/Colors'
function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.outerButtonContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: Colors.primary400}}
                style={styles.innerButtonContainer}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    outerButtonContainer: {
        marginVertical: 12,
        marginHorizontal: 8,
        borderRadius: 8,
        overflow: "hidden",
    },
    innerButtonContainer: {
        padding: 8,
        backgroundColor: Colors.primary500,
    },
    buttonText: {
        color: "#fff",
        textAlign: 'center'
    },
});
