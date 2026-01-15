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
    padding: 12,
    maxWidth: "80%",
  },
});

export default TextTitle;
