import PrimaryButton from "@/components/ui/PrimaryButton";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/theme";
import TextTitle from "@/components/ui/Title";
import Card from "@/components/Card";
import InstructionText from "@/components/ui/instructionText";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height } = useWindowDimensions();

  function numberInputHandler(text: string) {
    setEnteredNumber(text);
  }

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    router.push({
      pathname: "/GameScreen",
      params: { userNumber: chosenNumber },
    });
  };

  const marginTopDistance = height < 450 ? 30 : 100;

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.container, { marginTop: marginTopDistance }]}>
          <TextTitle>Guess My Number</TextTitle>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              keyboardType="number-pad"
              maxLength={2}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              importantForAutofill="no"
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            {/* <Button title="Start Game" onPress={() => {}} /> */}
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: deviceHeight < 450 ? deviceHeight / 20 : 100,
    gap: 16,
    alignItems: "center",
    // justifyContent: "center",
  },
  instructionText: {
    color: Colors.light.accentColor500,
    fontSize: 20,
  },
  numberInput: {
    height: 60,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.light.accentColor500,
    borderBottomWidth: 2,
    color: Colors.light.accentColor500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 6,
    marginTop: 16,
  },
  buttonContainer: {
    flex: 1,
  },
});
