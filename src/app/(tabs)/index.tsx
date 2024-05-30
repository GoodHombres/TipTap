import { View } from "react-native";
import { Typography } from "#components/Typography";

export default function CalculatorScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Typography variant="title">Calculator</Typography>
      <Typography variant="body">Welcome to the calculator screen!</Typography>
    </View>
  );
}
