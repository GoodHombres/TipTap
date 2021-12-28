import { Pressable, Text } from 'react-native';
import { CALCULATOR_MISSING_PREFERRED_TIPS } from '../../../../../common/lib/language';
import styles from './styles';

type Props = {
  onPress(): void;
};

const AddTipButton = ({ onPress }: Props): JSX.Element => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{CALCULATOR_MISSING_PREFERRED_TIPS}</Text>
  </Pressable>
);

export default AddTipButton;
