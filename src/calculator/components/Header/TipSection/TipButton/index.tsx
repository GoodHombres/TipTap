import { ReactNode } from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

type Props = {
  children: ReactNode;
  isSelected: boolean;
  onPress(): void;
};

const TipButton = ({ children, isSelected, onPress }: Props): JSX.Element => (
  <Pressable
    style={[styles.button, isSelected ? styles.buttonSelected : {}]}
    onPress={onPress}
  >
    <Text style={[styles.text, isSelected ? styles.textSelected : {}]}>
      {children}
    </Text>
  </Pressable>
);

export default TipButton;
