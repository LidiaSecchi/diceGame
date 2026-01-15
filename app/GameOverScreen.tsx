import PrimaryButton from "@/components/ui/PrimaryButton";
import TextTitle from "@/components/ui/Title";
import { Colors } from "@/constants/theme";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";

const GameOverScreen = () => {
  const { roundsNumber, userNumber } = useLocalSearchParams();

  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextTitle>Game Over!</TextTitle>
        <View
          style={[
            styles.imageContainer,
            {
              width: imageSize,
              height: imageSize,
              borderRadius: imageSize / 2,
              margin: width < 380 ? 18 : 36,
            },
          ]}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess{" "}
            <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton
            onPress={() => {
              router.push({ pathname: "/" });
            }}
          >
            Start New Game
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};
export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 260,
    // height: deviceWidth < 380 ? 150 : 260,
    // borderRadius: deviceWidth < 380 ? 75 : 130,
    // margin: deviceWidth < 380 ? 18 : 36,
    borderColor: Colors.light.primaryColor700,
    borderWidth: 3,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    alignItems: "center",
    margin: 24,
    color: "white",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.light.primaryColor500,
  },
});
