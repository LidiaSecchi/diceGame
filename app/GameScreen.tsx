import NumberContainer from "@/components/game/Number";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Card from "@/components/Card";
import InstructionText from "@/components/ui/instructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLog from "@/components/game/GuessLog";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen() {
  const { userNumber } = useLocalSearchParams();
  const parsedUserNumber = Number(userNumber);

  const initialGuess = generateRandomBetween(1, 100, parsedUserNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([] as number[]);

  const { height, width } = useWindowDimensions();

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < parsedUserNumber) ||
      (direction === "greater" && currentGuess > parsedUserNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRound) => [newRndNumber, ...prevGuessRound]);
  };

  useEffect(() => {
    if (currentGuess === parsedUserNumber && !!parsedUserNumber) {
      Alert.alert("Game Over", "The opponent guessed your number!", [
        { text: "Okay", style: "default" },
      ]);
      router.push({
        pathname: "/GameOverScreen",
        params: {
          userNumber: parsedUserNumber,
          roundsNumber: guessRounds.length + 1, // example: number of rounds played
          guessedNumber: currentGuess,
        },
      });
    }
  }, [currentGuess, parsedUserNumber]);

  let content = (
    <>
      <View style={{ alignItems: "center" }}>
        <Title>Opponent Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <Title>Opponent Guess</Title>
        <InstructionText style={[styles.instructionText, { marginBottom: 0 }]}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={{ alignItems: "center" }}>
            <NumberContainer style={styles.numberContainer}>
              {currentGuess}
            </NumberContainer>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { gap: width > 500 ? 20 : 16, margin: width > 500 ? 12 : 24 },
      ]}
    >
      {content}
      <View style={{ flex: 1, padding: width > 500 ? 0 : 16 }}>
        <FlatList
          data={guessRounds}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <GuessLog item={item} index={index} />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    alignItems: "center",
    // justifyContent: "center",
    gap: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 6,
    marginTop: 16,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 0,
  },
  numberContainer: {
    width: 100,
    height: 100,
  },
});
