import { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

type Props = {
  children: ReactNode;
};

const Bar = ({ children }: Props): JSX.Element => (
  <SafeAreaView>
    <View style={styles.bar}>{children}</View>
  </SafeAreaView>
);

export default Bar;
