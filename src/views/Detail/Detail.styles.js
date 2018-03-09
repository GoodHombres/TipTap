import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
    padding: 20
  },
  scroll: {
    flex: 1
  },
  list: {
    flex: 2
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    padding: 10
  },
  sectionTitle: {
    color: '#fff',
    padding: 20,
    paddingBottom: 10
  },
  full: { flex: 1 },
  emptyText: {
    paddingLeft: 20,
    color: 'rgba(246, 247, 249, 0.75)'
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20
  },
  selectedListItem: {
    backgroundColor: 'rgba(246, 247, 249, 0.03)'
  },
  itemText: {
    alignItems: 'flex-start',
    color: '#fff',
    flexDirection: 'row',
    fontSize: 18,
    paddingLeft: 20
  },
  specialText: {
    color: '#4cd964'
  },
  superscript: {
    color: '#fff',
    lineHeight: 20,
    marginLeft: 4,
    fontSize: 10
  }
});
