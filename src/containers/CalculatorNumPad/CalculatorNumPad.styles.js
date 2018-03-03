import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
    flex: 2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  column: {
    height: '16%',
    width: '33.3%',
  },
  full: {
    height: '20%',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '100',
    letterSpacing: 1.5,
  },
  green: {
    color: '#4cd964',
  },
  gray: {
    color: '#8e8e93',
  },
});