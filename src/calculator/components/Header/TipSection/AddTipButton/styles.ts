import { StyleSheet } from 'react-native';
import Theme from '../../../../../common/lib/theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: Theme.accentColor,
    paddingHorizontal: 12,
    paddingVertical: 8,
    opacity: 0.8,
  },
  buttonText: {
    color: Theme.backgroundColor,
    fontSize: 18,
  },
});

export default styles;
