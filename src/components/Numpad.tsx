import { Pressable, type PressableProps, View } from "react-native";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { DeleteIcon, Trash2Icon } from "#components/Icons";
import { Typography } from "#components/Typography";
import { cn } from "#helpers/cn";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

type Props = {
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
};

export function Numpad({ onChange, value }: Props) {
  return (
    <View className="flex-2 flex-row flex-wrap bg-card/[0.04]">
      <EmptyItem />
      <Button aria-disabled={value === 0} onPress={() => onChange(0)}>
        <Trash2Icon
          className={cn([
            "size-8 stroke-1",
            value > 0 ? "stroke-error" : "stroke-border",
          ])}
        />
      </Button>
      <Button
        aria-disabled={value === 0}
        onPress={() => onChange((prevAmount) => Math.floor(prevAmount / 10))}
      >
        <DeleteIcon
          className={cn([
            "size-8 stroke-1",
            value > 0 ? "stroke-warning" : "stroke-border",
          ])}
        />
      </Button>
      {numbers.map((number) => (
        <Button
          key={`numpad:${number}`}
          onPress={() => onChange((prevAmount) => prevAmount * 10 + number)}
        >
          <Typography className="text-3xl font-thin" variant="body">
            {number}
          </Typography>
        </Button>
      ))}
      <EmptyItem />
      <Button onPress={() => onChange((prevAmount) => prevAmount * 10)}>
        <Typography className="text-3xl font-thin" variant="body">
          0
        </Typography>
      </Button>
      <Button onPress={() => onChange((prevAmount) => prevAmount * 100)}>
        <Typography className="text-3xl font-thin" variant="body">
          00
        </Typography>
      </Button>
    </View>
  );
}

type ButtonProps = Pick<PressableProps, "disabled" | "onPress"> & {
  children: ReactNode;
};

function Button({ children, disabled, onPress }: ButtonProps) {
  return (
    <Pressable
      aria-disabled={!!disabled}
      className="w-1/3"
      disabled={disabled}
      onPress={onPress}
    >
      {({ pressed }) => (
        <View
          className={cn([
            "items-center py-6",
            pressed ? "bg-card/5" : "bg-transparent",
          ])}
        >
          {children}
        </View>
      )}
    </Pressable>
  );
}

function EmptyItem() {
  return <View className="w-1/3 py-6" />;
}
