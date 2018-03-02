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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  column: {
    width: '33.3%',
  },
  full: {
    width: '100%',
    paddingTop: 2,
    paddingBottom: 2,
  },
  numText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '100',
  },
  green: {
    color: '#4cd964',
  },
  gray: {
    color: '#8e8e93',
  },
});