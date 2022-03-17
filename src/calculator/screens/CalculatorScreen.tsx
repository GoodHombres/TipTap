import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';
import { CalculatorScreenProps, Routes } from '../../common/lib/routes';
import Container from '../components/Container';
import Header from '../components/Header';

const CalculatorScreen = ({ navigation }: CalculatorScreenProps) => {
  const { navigate } = navigation;

  return (
    <Container>
      <StatusBar style="dark" />
      <Header showSettingsMenu />
      <Text>This is the Calculator View</Text>
      <Button title="Open Settings" onPress={() => navigate(Routes.Settings)} />
    </Container>
  );
};

export default CalculatorScreen;
