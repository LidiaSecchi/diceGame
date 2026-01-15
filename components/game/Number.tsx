import { Colors } from "@/constants/theme";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const NumberContainer = ({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const device = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.light.accentColor500,
    padding: device < 380 ? 12 : 24,
    margin: 24,
    width: device < 380 ? 100 : 150,
    height: device < 380 ? 100 : 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: {
    color: Colors.light.accentColor500,
    fontSize: device < 380 ? 28 : 36,
    fontWeight: "bold",
  },
});
