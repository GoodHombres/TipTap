import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import styles from './styles';

type Props = {
  onPress(): void;
};

const SettingsButton = ({ onPress }: Props): JSX.Element => (
  <Pressable style={styles.button} onPress={onPress}>
    <Ionicons name="settings-sharp" size={22} color="white" />
  </Pressable>
);

export default SettingsButton;
