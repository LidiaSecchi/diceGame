import { StyleSheet, Text, TextProps, Platform } from "react-native";

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
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});

export default TextTitle;
