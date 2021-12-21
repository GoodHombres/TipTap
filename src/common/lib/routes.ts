import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum Routes {
  Bill = 'Bill',
  Calculator = 'Calculator',
  Settings = 'Settings',
}

export type RootStackParamList = {
  [Routes.Bill]: undefined;
  [Routes.Calculator]: undefined;
  [Routes.Settings]: undefined;
};

export type BillScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Bill
>;
export type CalculatorScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Calculator
>;
export type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Settings
>;
