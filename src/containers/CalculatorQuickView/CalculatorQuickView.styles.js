import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    padding: 20,
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 20,
  },
  stackView: {
    marginLeft: 20,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
    color: '#fff',
  },
  billText: {
    color: '#fff',
    flexDirection: 'row',
    fontSize: 64,
    fontWeight: '900',
    lineHeight: 64,
  },
  emptyText: {
    color: '#fff',
  },
  specialText: {
    color: '#4cd964',
    flexDirection: 'row',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 5,
  },
  superscript: {
    color: '#fff',
    lineHeight: 28,
    fontSize: 10,
  },
  superscriptBig: {
    color: '#fff',
    lineHeight: 68,
    fontSize: 32,
  },
});