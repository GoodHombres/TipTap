import { View } from "react-native";
import { Typography } from "#components/Typography";

export default function CameraScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Typography variant="title">Camera</Typography>
      <Typography variant="body">Welcome to the camera screen!</Typography>
    </View>
  );
}
