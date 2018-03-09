import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
    padding: 20
  },
  backButton: {
    marginLeft: 20
  },
  backButtonText: {
    paddingLeft: 10,
    fontSize: 16,
    color: '#fff'
  },
  sectionTitle: {
    color: '#fff',
    padding: 20,
    paddingBottom: 10
  },
  full: { flex: 1 },
  inputHint: {
    color: '#e4e4e4',
    fontSize: 12,
    padding: 20,
    paddingTop: 10
  },
  valid: {
    color: '#4cd964'
  },
  invalid: {
    color: '#ff3b30'
  },
  createButton: {
    padding: 10,
    alignSelf: 'flex-end'
  },
  emptyText: {
    paddingLeft: 20,
    color: 'rgba(246, 247, 249, 0.75)'
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: 20
  },
  itemButton: {
    padding: 10
  },
  danger: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: '#ff3b30',
    borderRadius: 4,
    padding: 20,
    width: '100%'
  },
  dangerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
})
