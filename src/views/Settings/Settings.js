import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './Settings.styles';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to TipTap
        </Text>
        <Text style={styles.instructions}>
          Settings View
        </Text>
      </SafeAreaView>
    );
  }
}