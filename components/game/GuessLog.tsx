import { Colors } from "@/constants/theme";
import { View, Text, StyleSheet } from "react-native";

const GuessLog = ({ item, index }: { item: number; index: number }) => {
  return (
    <View style={styles.listItem}>
      <Text># {index + 1}</Text>
      <Text>Opponent guess: {item}</Text>
    </View>
  );
};

export default GuessLog;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.light.primaryColor700,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    borderRadius: 40,
    backgroundColor: Colors.light.accentColor500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4, //android only
    shadowColor: "black", //IOS only
    shadowOffset: { width: 0, height: 2 }, //IOS only
    shadowRadius: 6, //IOS only
    shadowOpacity: 0.3, //IOS only
  },
});
