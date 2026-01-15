import { Colors } from "@/constants/theme";
import { StyleSheet, Text, TextProps } from "react-native";

const TextTitle = ({ children, ...rest }: TextProps) => {
  return (
    <Text style={styles.title} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.light.primaryColor500,
    padding: 12,
    maxWidth: "80%",
  },
});

export default TextTitle;
