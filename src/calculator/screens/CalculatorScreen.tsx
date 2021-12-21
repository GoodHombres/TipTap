import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CalculatorScreenProps, Routes } from '../../common/lib/routes';

const CalculatorScreen = ({ navigation }: CalculatorScreenProps) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <Text>This is the Calculator View</Text>
      <StatusBar style="auto" />
      <Button title="Open Settings" onPress={() => navigate(Routes.Settings)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CalculatorScreen;
