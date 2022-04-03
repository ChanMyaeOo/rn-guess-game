import { Text, StyleSheet } from "react-native";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontFamily: "open-sans-bold",
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 8,
        marginTop: 15,
        width: 300,
        maxWidth: "80%",
    },
});
