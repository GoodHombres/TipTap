import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import useAuthMethods from '../../auth/lib/useAuthMethods';

export default function SettingsScreen() {
  const { resetOnboarding } = useAuthMethods();

  return (
    <View style={styles.container}>
      <Text>This is the Settings View</Text>
      <StatusBar style="auto" />
      <Button title="Reset" onPress={() => resetOnboarding()} />
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
