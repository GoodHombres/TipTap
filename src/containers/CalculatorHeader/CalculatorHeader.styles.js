import { Platform, StyleSheet } from 'react-native';

// Set superscript size based on Platform
const superscriptSize = Platform.select({
  android: 18,
  ios: 10,
});

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingTop: 15,
  },
  tipListContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingBottom: 20,
  },
  superscript: {
    lineHeight: 20,
    marginLeft: 4,
    fontSize: superscriptSize,
  },
  settingsBtn: {
    padding: 10,
    paddingRight: 20,
    paddingBottom: 20,
  },
  btnText: {
    color: 'rgba(246, 247, 249, 0.75)',
  },
});
