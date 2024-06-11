import { Pressable, SafeAreaView, View } from "react-native";
import { useState } from "react";
import { Numpad } from "#components/Numpad";
import { Typography } from "#components/Typography";
import { cn } from "#helpers/cn";
import { formatToUsd } from "#helpers/currency";

const tips = [0.15, 0.18, 0.2, 0.25];

export default function CalculatorScreen() {
  const [tipPercent, setTipPercent] = useState(0.2);
  const [amount, setAmount] = useState(0);
  const tipAmount = amount * tipPercent;
  const totalAmount = amount + tipAmount;

  return (
    <SafeAreaView className="flex-1 justify-between gap-4">
      {/* Header */}
      <View className="flex flex-row gap-2 p-6">
        {tips.map((tip) => (
          <Pressable key={tip} onPress={() => setTipPercent(tip)}>
            {({ pressed }) => (
              <View
                className={cn([
                  "rounded-lg bg-card/[0.04] px-4 py-3",
                  {
                    "bg-primary/20": pressed,
                    "bg-primary": tip === tipPercent,
                  },
                ])}
              >
                <Typography
                  className={
                    tip === tipPercent
                      ? "text-primary-foreground"
                      : "text-card-foreground"
                  }
                  variant="body"
                >
                  {tip * 100}%
                </Typography>
              </View>
            )}
          </Pressable>
        ))}
      </View>
      {/* Main */}
      <View className="flex grow flex-col items-end justify-end gap-6 p-6">
        <View className="flex flex-row items-start gap-1">
          <Typography
            className="text-3xl font-black leading-[48px]"
            variant="subtitle"
          >
            $
          </Typography>
          <Typography
            className="text-6xl font-black"
            numberOfLines={1}
            variant="title"
          >
            {formatToUsd(amount)}
          </Typography>
        </View>
        <View className="flex flex-row gap-4">
          {/*  */}
          <View className="flex flex-col items-end">
            <Typography variant="body">Tip</Typography>
            <Typography className="text-primary" variant="title">
              {tipPercent * 100}%
            </Typography>
          </View>
          {/*  */}
          <View className="flex flex-col items-end">
            <Typography variant="body">Tip Amount</Typography>
            <Typography className="text-primary" variant="title">
              ${formatToUsd(tipAmount)}
            </Typography>
          </View>
          {/*  */}
          <View className="flex flex-col items-end">
            <Typography variant="body">Total Amount</Typography>
            <Typography className="text-primary" variant="title">
              ${formatToUsd(totalAmount)}
            </Typography>
          </View>
        </View>
      </View>
      <Numpad value={amount} onChange={setAmount} />
    </SafeAreaView>
  );
}
