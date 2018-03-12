import { Platform, StyleSheet } from 'react-native';

const superscriptSize = Platform.select({
  android: 18,
  ios: 10,
});

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
    paddingTop: 20,
  },
  main: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    margin: 20,
  },
  secondary: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
  },
  list: {
    flex: 2,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    padding: 10,
  },
  sectionTitle: {
    color: '#fff',
    padding: 20,
    paddingBottom: 10,
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  itemText: {
    alignItems: 'flex-start',
    color: '#fff',
    flexDirection: 'row',
    fontSize: 18,
    paddingLeft: 20,
  },
  specialText: {
    color: '#4cd964',
  },
  superscript: {
    lineHeight: 20,
    marginLeft: 4,
    fontSize: superscriptSize,
  },
});
