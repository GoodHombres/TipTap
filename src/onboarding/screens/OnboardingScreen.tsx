import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import useOnboardingMethods from '../lib/useOnboardingMethods';

export default function OnboardingScreen() {
  const { complete } = useOnboardingMethods();

  return (
    <View style={styles.container}>
      <Text>This is the Onboarding View</Text>
      <StatusBar style="auto" />
      <Button title="Finish" onPress={() => complete()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
