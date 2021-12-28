import { StyleSheet } from 'react-native';
import Theme from '../../../../../common/lib/theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  buttonSelected: {
    backgroundColor: Theme.accentColor,
  },
  text: {
    fontSize: 18,
    color: Theme.foregroundColor,
  },
  textSelected: {
    color: Theme.backgroundColor,
  },
});

export default styles;
