import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
    padding: 20,
  },
  section: {
    padding: 10,
  },
  title: {
    color: '#fff',
    padding: 2,
    fontWeight: '200',
    fontSize: 24,
  },
  item: {
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 1,
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
  },
  commonText: {
    color: '#fff',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemButton: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    padding: 10,
    marginRight: 20,
    borderColor: '#aaa',
    borderWidth: 1,
  },
  addButton: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
  },
  green: {
    color: '#4cd964',
  },
  gray: {
    color: '#8e8e93',
  },
  topSpaced: {
    paddingTop: 10,
  },
});
