import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import QuickView from './../CalculatorQuickView/CalculatorQuickView';
import CalculatorHeader from './../CalculatorHeader/CalculatorHeader';

import styles from './QuickTipPreview.styles';

// Set input type based on Platform
const spaceClass = Platform.select({
  android: styles.divider,
  ios: styles.space,
});

export default class QuickTipPreview extends Component {
  state = {
    tipList: [10, 15, 18, 20],
    selectedTip: 10,
    amountEntered: 1995,
  };

  componentDidMount() {
    setInterval(() => {
      const { selectedTip, tipList } = this.state;
      const index = tipList.findIndex(tip => tip === selectedTip);
      this.setState({
        selectedTip: tipList[tipList.length - 1 > index ? index + 1 : 0],
      });
    }, 3000);
  }

  render() {
    const { amountEntered, selectedTip, tipList } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Instant Tips</Text>
          <Text style={styles.text}>
            Quickly swap between your favorite tips.
          </Text>
        </View>
        <CalculatorHeader
          tipList={tipList}
          selectedTip={selectedTip}
          handleSelectTip={tip => this.setState({ selectedTip: tip })}
          handleSettingsPress={() => null}
        />
        {/* QuickView */}
        <QuickView selectedTip={selectedTip} amountEntered={amountEntered} />
        {/* Bottom Space */}
        <View style={spaceClass} />
      </View>
    );
  }
}
