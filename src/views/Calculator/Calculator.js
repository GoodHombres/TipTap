/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, SafeAreaView } from 'react-native';

import Header from './../../containers/CalculatorHeader/CalculatorHeader';
import QuickView from './../../containers/CalculatorQuickView/CalculatorQuickView';
import NumPad from './../../containers/CalculatorNumPad/CalculatorNumPad';
import styles from './Calculator.styles';

import round from './../../utils/roundUSD';

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
      amountEntered: 0,
    };

    this.handleSelectTip = this.handleSelectTip.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClearPress = this.handleClearPress.bind(this);
    this.handleDeletePress = this.handleDeletePress.bind(this);
  }

  handleSelectTip(tip) {
    this.setState({ selectedTip: tip });
  }

  handleNavigation(view, params = null) {
    const { navigate } = this.props.navigation;

    console.log(`Navigate to ${view}`);
    console.log(params);
    navigate(view, params);
  }

  handleKeyPress(key) {

    // TODO: Change
    const maxDigits = 6;

    const { amountEntered } = this.state;

    // Calculate only if number pressed or max digits not reached
    if (isNaN(key) || amountEntered.toString().length >= maxDigits) return;

    // Calculate current digits distance to max allowed
    const complement = maxDigits - this.state.amountEntered.toString().length;

    // Calculate factor trimmed to max digits allowed
    const added = complement < 2 ? key.substr(-1) : key;

    // Set new amount
    this.setState({ amountEntered: parseInt(`${amountEntered}` + added, 10) });
  }

  handleClearPress() {
    this.setState({ amountEntered: 0 });
  }

  handleDeletePress() {
    this.setState({ amountEntered: Math.floor(this.state.amountEntered / 10) });
  }

  render() {
    const { amountEntered, selectedTip } = this.state;

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
        {/* QuickView */}
        <QuickView selectedTip={selectedTip} amountEntered={amountEntered} />
        {/* NumPad */}
        <NumPad
          handleKeyPress={this.handleKeyPress}
          handleDeletePress={this.handleDeletePress}
          handleClearPress={this.handleClearPress}
          handleCameraPress={() => this.handleNavigation(null)}
          handleCalculatePress={() => this.handleNavigation(null)}
          canClear={amountEntered !== 0} />
      </SafeAreaView>
    );
  }
}
