import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  tipListContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  superscript: {
    color: '#fff',
    lineHeight: 20,
    marginLeft: 4,
    fontSize: 10,
  },
  settingsBtn: {
    padding: 10,
    paddingRight: 0,
  },
});
