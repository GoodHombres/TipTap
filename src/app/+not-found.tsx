import { Link, Stack } from "expo-router";
import { View } from "react-native";

import { Typography } from "#components/Typography";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center gap-4 p-5">
        <Typography variant="title">
          This screen doesn&rsquo;t exist.
        </Typography>
        <Link href="/">
          <Typography variant="link">Go to home screen!</Typography>
        </Link>
      </View>
    </>
  );
}
