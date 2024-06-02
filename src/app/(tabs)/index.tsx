import { SafeAreaView, View } from "react-native";
import { useState } from "react";
import { Numpad } from "#components/Numpad";
import { Typography } from "#components/Typography";
import { formatToUsd } from "#helpers/currency";

export default function CalculatorScreen() {
  const [amount, setAmount] = useState(0);

  return (
    <SafeAreaView className="flex-1 justify-between gap-4">
      <Typography variant="title">Calculator</Typography>
      <View className="grow items-end justify-end p-6">
        <View className="flex flex-row items-start gap-1">
          <Typography
            className="text-3xl font-black leading-[48px]"
            variant="subtitle"
          >
            $
          </Typography>
          <Typography className="text-6xl font-black" variant="title">
            {formatToUsd(amount)}
          </Typography>
        </View>
      </View>
      <Numpad value={amount} onChange={setAmount} />
    </SafeAreaView>
  );
}
