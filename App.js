import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [pickedNumber, setPickedNumber] = useState();
    const [isGameOver, setIsGameOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0)

    const [fontLoaded] = useFonts({
        "open-sans": require("./assets/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/OpenSans-SemiBold.ttf"),
    });

    if (!fontLoaded) return <AppLoading />;
    
    function handlePickedHandler(number) {
        setPickedNumber(number);
        setIsGameOver(false);
    }

    function handleGameOver(guessRoundsNumber) {
        setIsGameOver(true);
        setGuessRounds(guessRoundsNumber)
    }

    let screen = <StartGameScreen onPickedHandler={handlePickedHandler} />;

    function startNewGameHandler() {
        setPickedNumber(null)
        setGuessRounds(0)
    }

    if (pickedNumber) {
        screen = (
            <GameScreen userNumber={pickedNumber} onGameOver={handleGameOver} />
        );
    }

    if (isGameOver && pickedNumber) {
        screen = <GameOverScreen roundsNumber={guessRounds} userNumber={pickedNumber} onStartNewGame={startNewGameHandler} />;
    }
    return (
        <LinearGradient
            colors={["#62041a", "#ddb52f"]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.bgImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    bgImage: {
        opacity: 0.4,
    },
});
