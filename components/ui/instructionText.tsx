import { Colors } from "@/constants/theme";
import { Text, StyleSheet, TextProps } from "react-native";

const instructionText = ({ children, style, ...rest }: TextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default instructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    fontFamily: "open-sans",
    color: Colors.light.accentColor500,
  },
});
