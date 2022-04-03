import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/Colors";

function StartGameScreen({ onPickedHandler }) {
    const [enteredText, setEnteredText] = useState("");
    function onChangeTextHandler(inputText) {
        setEnteredText(inputText);
    }
    function handleReset() {
        setEnteredText("");
    }

    function handleConfirm() {
        let value = parseInt(enteredText);
        if (isNaN(value) || value <= 0 || value >= 100) {
            Alert.alert(
                "Invalid Number!",
                "Input has to be a number between 1 and 99",
                [{ text: "Okay", onPress: handleReset }]
            );
            return;
        }

        onPickedHandler(value);
        setEnteredText("");
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={onChangeTextHandler}
                    value={enteredText}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleReset}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleConfirm}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: Colors.secondary300,
        fontSize: 35,
        fontWeight: "bold",
        color: Colors.secondary300,
        marginVertical: 10,
        width: 50,
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
