import { Text, type TextProps } from "react-native";
import { cn } from "#helpers/cn";
import type { ObjectValues } from "#types/ObjectValues";

const Variant = {
  body: "body",
  link: "link",
  title: "title",
  subtitle: "subtitle",
} as const;

type VariantType = ObjectValues<typeof Variant>;

const VariantClasses = {
  [Variant.body]: "text-base leading-[24px]",
  [Variant.link]: "text-base leading-[30px] text-primary",
  [Variant.title]: "text-2xl font-bold leading-[32px]",
  [Variant.subtitle]: "text-xl font-bold",
} satisfies Record<VariantType, string>;

export type Props = TextProps & {
  variant?: VariantType;
};

export function Typography({
  className,
  variant = Variant.body,
  ...rest
}: Props) {
  return (
    <Text
      className={cn([
        "font-sans text-foreground",
        VariantClasses[variant],
        className,
      ])}
      {...rest}
    />
  );
}
