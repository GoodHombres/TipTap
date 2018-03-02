/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, SafeAreaView, View } from 'react-native';

import Header from './../../containers/CalculatorHeader/CalculatorHeader';
import QuickView from './../../containers/CalculatorQuickView/CalculatorQuickView';
import NumPad from './../../containers/CalculatorNumPad/CalculatorNumPad';
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
      amountEntered: 0,
    };

    this.handleSelectTip = this.handleSelectTip.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleCameraPress = this.handleCameraPress.bind(this);
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

    // Calculate only if number pressed or max digits not reached
    if (isNaN(key) || this.state.amountEntered.toString().length >= maxDigits) return;
    
    this.setState({ amountEntered: ( this.state.amountEntered * 10 + key ) });
  }

  handleCameraPress() {
    
  }

  handleSettingsPress() {
    
  }

  handleClearPress() {
    this.setState({ amountEntered: 0 });
  }

  handleDeletePress() {
    this.setState({ amountEntered: Math.floor(this.state.amountEntered / 10 ) });
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
          handleCameraPress={this.handleCameraPress}
          canClear={amountEntered !== 0} />
        <View style={styles.wrapper} >
          <Text style={styles.calculate}>
            Calculate
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
