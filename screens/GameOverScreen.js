import { StyleSheet, Text, View, Image } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/Colors";
import PrimaryButton from '../components/PrimaryButton'
import React from "react";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/success.png")}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text>{" "}
                rounds to guess <Text style={styles.highlightText}>{userNumber}</Text>{" "}
                number.
            </Text>

            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },
    imageContainer: {
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 2,
        borderColor: Colors.primary500,
        overflow: "hidden",
        marginVertical: 24,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
      fontSize: 20,
      fontFamily: 'open-sans-bold',
      textAlign: 'center',
      marginBottom: 15
    },
    highlightText: {
      color: Colors.primary500,
      fontSize: 21
    }
});
