/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import styles from './App.styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to TipTap!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js in src/containers/App/
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
