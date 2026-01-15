import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/theme";

interface PrimaryButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
}
export default function PrimaryButton({
  onPress,
  children,
}: PrimaryButtonProps) {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [style.buttonInnerContainer, style.pressed]
            : style.buttonInnerContainer
        }
        android_ripple={{ color: "#640233", foreground: true }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
  //   return <Button title={title} onPress={onPressHandler} {...rest} />;
}

const style = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.light.primaryColor500,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
