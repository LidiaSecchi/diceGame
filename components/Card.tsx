import { Colors } from "@/constants/theme";
import { View, StyleSheet, Dimensions } from "react-native";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.light.primaryColor700,
    marginTop: deviceWidth < 380 ? 10 : 20,
    marginHorizontal: 24,
    borderRadius: 16,
    elevation: 3, //android only
    shadowColor: "black", //IOS only
    shadowOffset: { width: 0, height: 3 }, //IOS only
    shadowRadius: 6, //IOS only
    shadowOpacity: 0.5, //IOS only
  },
});
