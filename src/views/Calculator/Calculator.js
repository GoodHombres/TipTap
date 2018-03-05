/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage, StatusBar, View } from 'react-native';

// Containers
import Header from './../../containers/CalculatorHeader/CalculatorHeader';
import QuickView from './../../containers/CalculatorQuickView/CalculatorQuickView';
import NumPad from './../../containers/CalculatorNumPad/CalculatorNumPad';

import { FAVORITE_TIP_LIST } from './../../utils/constants';

// Styles
import styles from './Calculator.styles';

export default class Calculator extends Component {
  // Hide navigation header
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      tipList: [],
      selectedTip: null,
      amountEntered: 0,
    };

    this.handleSelectTip = this.handleSelectTip.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClearPress = this.handleClearPress.bind(this);
    this.handleDeletePress = this.handleDeletePress.bind(this);
  }

  componentDidMount() {
    // Get favorite tip list
    this.getFavoriteTipList();
  }

  /**
   * Get list of favorite tips
   *
   */
  async getFavoriteTipList() {
    try {
      // Get favorite tips
      const tipList = JSON.parse(await AsyncStorage.getItem(FAVORITE_TIP_LIST)) || [];
      // Set tip list
      this.setState({ tipList, selectedTip: tipList.length ? tipList[0] : null });
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Resets the amount entered back to zero
   *
   */
  handleClearPress() {
    this.setState({ amountEntered: 0 });
  }

  /**
   * Removes the last digit entered from the amountEntered
   *
   */
  handleDeletePress() {
    const { amountEntered } = this.state;

    this.setState({ amountEntered: Math.floor(amountEntered / 10) });
  }

  /**
   * Adds digit to amountEntered
   *
   * @param {string} digit
   */
  handleKeyPress(digit) {
    const { amountEntered } = this.state;
    const maxDigits = 6;

    // Calculate only if number pressed or max digits not reached
    if (isNaN(digit) || amountEntered.toString().length >= maxDigits) return;

    // Calculate current digits distance to max allowed
    const complement = maxDigits - amountEntered.toString().length;

    // Calculate factor trimmed to max digits allowed
    const added = complement < 2 ? digit.substr(-1) : digit;

    // Set new amount
    this.setState({ amountEntered: parseInt(`${amountEntered}` + added, 10) });
  }

  /**
   * Navigates to given view and sends parameteres
   *
   * @param {string} view
   * @param {any} params
   */
  handleNavigation(view, params = null) {
    const { navigate } = this.props.navigation;

    console.log(`Navigate to ${view}`);
    console.log(params);

    if (!view) return;

    navigate(view, params);
  }

  /**
   * Sets the selected tip
   *
   * @param {number} tip
   */
  handleSelectTip(tip) {
    this.setState({ selectedTip: tip });
  }

  render() {
    const { amountEntered, selectedTip, tipList } = this.state;

    return (
      <View style={styles.container}>
        {/* Status Bar */}
        <StatusBar barStyle={'light-content'} />
        {/* Header Container */}
        <Header
          tipList={tipList}
          selectedTip={selectedTip}
          handleSelectTip={this.handleSelectTip}
          handleSettingsPress={() => this.handleNavigation('Settings')}
        />
        {/* QuickView */}
        <QuickView
          selectedTip={selectedTip}
          amountEntered={amountEntered}
        />
        {/* NumPad */}
        <NumPad
          amountEntered={amountEntered}
          canClear={amountEntered !== 0}
          handleKeyPress={this.handleKeyPress}
          handleDeletePress={this.handleDeletePress}
          handleClearPress={this.handleClearPress}
          handleNavigation={this.handleNavigation}
        />
      </View>
    );
  }
}
