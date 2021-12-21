import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider from './src/auth/components/AuthProvider';
import BillScreen from './src/bill/screens/BillScreen';
import CalculatorScreen from './src/calculator/screens/CalculatorScreen';
import SplashScreen from './src/common/components/SplashScreen';
import { Routes, RootStackParamList } from './src/common/lib/routes';
import { OnboardingStatus } from './src/onboarding/lib/onboardingStatus';
import useOnboardingStatus from './src/onboarding/lib/useOnboardingStatus';
import OnboardingScreen from './src/onboarding/screens/OnboardingScreen';
import SettingsScreen from './src/settings/screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = (): JSX.Element => {
  const onboardingStatus = useOnboardingStatus();

  if (onboardingStatus === OnboardingStatus.verifying) return <SplashScreen />;

  if (onboardingStatus !== OnboardingStatus.complete)
    return <OnboardingScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Calculator}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Routes.Bill} component={BillScreen} />
        <Stack.Screen name={Routes.Calculator} component={CalculatorScreen} />
        <Stack.Screen name={Routes.Settings} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = (): JSX.Element => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
