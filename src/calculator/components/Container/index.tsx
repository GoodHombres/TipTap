import { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props): JSX.Element => (
  <View style={styles.container}>{children}</View>
);

export default Container;
