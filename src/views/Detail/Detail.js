import React, { Component } from 'react';
import {
  AsyncStorage,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native';

import Button from './../../components/Button/Button';
import ListItem from './../../components/ListItem/ListItem';
import BackButton from './../../components/BackButton/BackButton';

import QuickView from './../../containers/CalculatorQuickView/CalculatorQuickView';
import SnackbarDispatcher from './../../containers/SnackbarDispatcher/SnackbarDispatcher';
import CheckSplitter from './../../containers/CheckSplitter/CheckSplitter';

import { TIP_LIST, FAVORITE_TIP_LIST } from './../../utils/constants';
import USD from './../../utils/convertUSD';
import calculateTip from './../../utils/calculateTip';
import calculateTotal from './../../utils/calculateTotal';

import styles from './Detail.styles';

export default class Detail extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: `Bill: $${USD(navigation.getParam('amountEntered'))}`,
    headerLeft: <BackButton navigation={navigation} />
  });

  state = {
    tipList: [],
    splits: 1,
    selectedTip: null
  };

  componentDidMount() {
    const { navigation } = this.props;
    // Get selected tip
    const selectedTip = navigation.getParam('selectedTip');
    // Set state
    this.setState({ selectedTip });
    // Get tip list
    this.getTipList();
  }

  /**
   * Gets tiplist
   *
   */
  getTipList = async () => {
    try {
      // Get list of tips
      const tipList = JSON.parse(await AsyncStorage.getItem(TIP_LIST));
      // Update state
      this.setState({ tipList: tipList || [] });
    } catch (e) {
      console.warn(e);
      SnackbarDispatcher.message(
        `Unable to retrieve tips at this time`,
        'error',
        'bottom'
      );
    }
  };

  /**
   * Sets selected tip
   *
   */
  setSelectedTip = tip => {
    this.setState({ selectedTip: tip });
  };

  renderTip = tip => {
    const { navigation } = this.props;
    const { selectedTip, splits } = this.state;
    const amountEntered = navigation.getParam('amountEntered');

    return (
      <ListItem
        style={
          selectedTip === tip
            ? [styles.listItem, styles.selectedListItem]
            : [styles.listItem]
        }
        handleOnPress={() => this.setSelectedTip(tip)}>
        <Text style={styles.itemText}>
          {tip}
          <Text style={styles.superscript}>%</Text>
        </Text>
        <Text style={[styles.itemText, styles.specialText]}>
          <Text style={styles.superscript}>$</Text>
          {USD(calculateTip(amountEntered, tip, splits))}
        </Text>
        <Text style={[styles.itemText, styles.specialText]}>
          <Text style={styles.superscript}>$</Text>
          {USD(calculateTotal(amountEntered, tip, splits))}
        </Text>
      </ListItem>
    );
  };

  handleOnValueChange = value => {
    this.setState({ splits: value });
  };

  render() {
    const { selectedTip, tipList, splits } = this.state;
    const { navigation } = this.props;
    const amountEntered = navigation.getParam('amountEntered');

    return (
      <SafeAreaView style={styles.container}>
        {/* QuickView */}
        <ScrollView style={styles.scroll}>
          <QuickView
            selectedTip={selectedTip}
            amountEntered={amountEntered}
            splits={splits}
          />
          {/* Tips Splitter */}
          <CheckSplitter
            splits={splits}
            handleOnValueChange={this.handleOnValueChange}
          />
          <View style={styles.list}>
            {/* Tip List */}
            <FlatList
              data={tipList}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={() => (
                <Text style={styles.emptyText}>No tips to display</Text>
              )}
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
      </SafeAreaView>
    );
  }
}
