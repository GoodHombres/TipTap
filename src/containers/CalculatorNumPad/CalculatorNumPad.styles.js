import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
  },
  keyPadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  key: {
    width: '33.3%',
  },
});