import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#020202',
    flex: 1,
    paddingTop: 20,
  },
  main: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    margin: 20,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    letterSpacing: 2,
    fontWeight: '900',
    marginTop: 60,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
  },
  icon: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
  },
  btnText: {
    color: '#020202',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  skipContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  skipButton: {
    backgroundColor: 'rgba(246, 247, 249, 0.08)',
    borderRadius: 100,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: '#4cd964',
    borderRadius: 100,
    margin: 40,
    padding: 20,
    width: '80%',
  },
});
