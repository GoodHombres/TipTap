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

import { FAVORITE_TIP_LIST, SELECTED_TIP  } from './../../utils/constants';

// Styles
import styles from './Calculator.styles';

export default class Calculator extends Component {
  // Hide navigation header
  static navigationOptions = {
    header: null,
  };

  state = {
    tipList: [],
    selectedTip: null,
    amountEntered: 0,
  };

  componentDidMount() {
    // Get favorite tip list
    this.getFavoriteTipList();

    // Get last selected tip
    this.getLastSelectedTip();
  }

  /**
   * Get list of favorite tips
   *
   */
  getFavoriteTipList = async () => {
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
   * Get latest selected tip
   *
   */
  getLastSelectedTip = async () => {
    try {
      // Get favorite tips
      const selectedTip = JSON.parse(await AsyncStorage.getItem(SELECTED_TIP));
      console.log(`selectedTip: ${selectedTip}`);

      if (selectedTip) {
        // Set selected tip
        this.setState({ selectedTip });
      } else {
        // Get favorite tips
        const tipList = JSON.parse(await AsyncStorage.getItem(FAVORITE_TIP_LIST));

        // Set selected tip
        this.setState({ selectedTip: (tipList && tipList[0]) || null });
      }
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Update selected tip in disk
   *
   */
  storeLastSelectedTip = async () => {
    try {
      const { selectedTip } = this.state;

      if (!selectedTip) return;

      // Set items
      await AsyncStorage.setItem(SELECTED_TIP, JSON.stringify(selectedTip));
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Resets the amount entered back to zero
   *
   */
  handleClearPress = () => {
    this.setState({ amountEntered: 0 });
  }

  /**
   * Removes the last digit entered from the amountEntered
   *
   */
  handleDeletePress = () => {
    const { amountEntered } = this.state;

    this.setState({ amountEntered: Math.floor(amountEntered / 10) });
  }

  /**
   * Adds digit to amountEntered
   *
   * @param {string} digit
   */
  handleKeyPress = (digit) => {
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
  handleNavigation = (view, params = null) => {
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
  handleSelectTip = (tip) => {
    this.setState({ selectedTip: tip }, this.storeLastSelectedTip);
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
