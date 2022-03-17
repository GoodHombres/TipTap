import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import useOnboardingMethods from '../../onboarding/lib/useOnboardingMethods';

export default function SettingsScreen() {
  const { reset } = useOnboardingMethods();

  return (
    <View style={styles.container}>
      <Text>This is the Settings View</Text>
      <StatusBar style="auto" />
      <Button title="Reset" onPress={() => reset()} />
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
