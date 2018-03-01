/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, SafeAreaView } from 'react-native';

import Header from './../../containers/CalculatorHeader/CalculatorHeader';
import styles from './Calculator.styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Calculator extends Component<Props> {
  // Hide navigation header
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      selectedTip: 15,
    };

    this.handleSelectTip = this.handleSelectTip.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleSelectTip(tip) {
    this.setState({ selectedTip: tip });
  }

  handleNavigation(view, params = null) {
    const { navigate } = this.props.navigation;

    console.log(`Navigate to ${view}`);
    console.log(params);
    // navigate(view, params);
  }

  render() {
    const { selectedTip } = this.state;

    // TODO: Change
    const tipList = [10, 15, 18, 20, 25];

    return (
      <SafeAreaView style={styles.container}>
        {/* Header Container */}
        <Header
          tipList={tipList}
          selectedTip={selectedTip}
          handleSelectTip={this.handleSelectTip}
          handleSettingsPress={() => this.handleNavigation('Settings')}
        />
        {/*  */}
        <Text style={styles.welcome}>
          Welcome to TipTap!
        </Text>
        <Text style={styles.instructions}>
        Selected tip is {selectedTip}%!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </SafeAreaView>
    );
  }
}
