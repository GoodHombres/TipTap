import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum Routes {
  Bill = 'Bill',
  Calculator = 'Calculator',
  Onboarding = 'Onboarding',
  Settings = 'Settings',
}

export type RootStackParamList = {
  Bill: undefined;
  Calculator: undefined;
  Onboarding: undefined;
  Settings: undefined;
};

export type BillScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Bill
>;
export type CalculatorScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Calculator
>;
export type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Onboarding
>;
export type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Settings
>;
