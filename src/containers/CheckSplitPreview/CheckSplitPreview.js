import React, { Component } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

import ListItem from './../../components/ListItem/ListItem';
import CheckSplitter from './../CheckSplitter/CheckSplitter';
import QuickView from './../CalculatorQuickView/CalculatorQuickView';

import USD from './../../utils/convertUSD';
import calculateTip from './../../utils/calculateTip';
import calculateTotal from './../../utils/calculateTotal';

import styles from './CheckSplitPreview.styles';

export default class CheckSplitPreview extends Component {
  state = {
    people: 1,
    selectedTip: 15,
    amountEntered: 1995,
    tipList: [10, 15, 18, 20],
  };

  handleOnValueChange = value => {
    this.setState({ people: value });
  };

  /**
   * Sets selected tip
   *
   */
  setSelectedTip = tip => {
    this.setState({ selectedTip: tip });
  };

  renderTip = tip => {
    const { amountEntered, selectedTip, people } = this.state;

    const textClass =
      selectedTip === tip
        ? [styles.itemText, styles.specialText]
        : styles.itemText;

    return (
      <ListItem
        style={styles.listItem}
        handleOnPress={() => this.setSelectedTip(tip)}>
        <Text style={textClass}>
          {tip}
          <Text style={styles.superscript}>%</Text>
        </Text>
        <Text style={textClass}>
          <Text style={styles.superscript}>$</Text>
          {USD(calculateTip(amountEntered, tip, people))}
        </Text>
        <Text style={textClass}>
          <Text style={styles.superscript}>$</Text>
          {USD(calculateTotal(amountEntered, tip, people))}
        </Text>
      </ListItem>
    );
  };

  render() {
    const { amountEntered, people, selectedTip, tipList } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Split Bill</Text>
          <Text style={styles.text}>
            Have company? Effortlessly split the bill.
          </Text>
        </View>
        <ScrollView style={styles.secondary}>
          <QuickView
            selectedTip={selectedTip}
            amountEntered={amountEntered}
            splits={people}
          />
          <CheckSplitter
            splits={people}
            handleOnValueChange={this.handleOnValueChange}
          />
          <View style={styles.list}>
            {/* Tip List */}
            <FlatList
              data={tipList}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={() => {
                return (
                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Tip</Text>
                    <Text style={styles.sectionTitle}>Tip Amount</Text>
                    <Text style={styles.sectionTitle}>Total</Text>
                  </View>
                );
              }}
              renderItem={({ item }) => this.renderTip(item)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
