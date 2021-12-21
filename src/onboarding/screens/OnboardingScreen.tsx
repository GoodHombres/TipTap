import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import useAuthMethods from '../../auth/lib/useAuthMethods';

export default function OnboardingScreen() {
  const { completeOnboarding } = useAuthMethods();

  return (
    <View style={styles.container}>
      <Text>This is the Onboarding View</Text>
      <StatusBar style="auto" />
      <Button title="Finish" onPress={() => completeOnboarding()} />
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
