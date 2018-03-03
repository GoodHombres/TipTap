import React, { Component } from 'react';
import { AsyncStorage, Text, View, SafeAreaView, ScrollView, FlatList, TextInput } from 'react-native';

import Icon from './../../components/Icon/Icon';
import Button from './../../components/Button/Button';

import styles from './Settings.styles';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor() {
    super();

    // Default list
    const defaultList = [15, 18, 20];

    this.state = {
      tipsList: defaultList,
      favoriteTips: defaultList,
      tipInput: '',
    };

    // Bindings
    this.handleAddTip = this.handleAddTip.bind(this);
    this.handleRemoveTip = this.handleRemoveTip.bind(this);
    this.handleAddFavoriteTip = this.handleAddFavoriteTip.bind(this);
    this.handleRemoveFavoriteTip = this.handleRemoveFavoriteTip.bind(this);

    // Update data from local storage asynchronously
    this.retrieveStoredData();
  }

  async retrieveStoredData() {

    const { tipsList, favoriteTips, tipsListDataSource, favoriteTipsDataSource } = this.state;

    let newTipsList = null;
    try {
      // Retrieve tipsList asynchronously from local storage
      newTipsList = JSON.parse(await AsyncStorage.getItem('tipsList'));

    } catch (error) {

      // Reuse old values
      newTipsList = tipsList;

      // TODO: Toast error message
      console.log('Tips List saving ERROR!');
    }

    let newFavoriteTips = null;
    try {
      // Retrieve favoriteTips asynchronously from local storage
      newFavoriteTips = JSON.parse(await AsyncStorage.getItem('favoriteTips'));

    } catch (error) {

      // Reuse old values
      newFavoriteTips = favoriteTips;

      // TODO: Toast error message
      console.log('Tips List saving ERROR!');
    }

    // Update state if data was found or set same old values
    this.setState({
      tipsList: newTipsList,
      favoriteTips: newFavoriteTips,
    });
  }

  async updateStoredData() {

    let { tipsList, favoriteTips } = this.state;

    try {
      // Store tipsList asynchronously to local storage
      await AsyncStorage.setItem('tipsList', JSON.stringify(tipsList));
      console.log(`Tips List saved! ${tipsList}`);
    } catch (error) {
      // TODO: Toast error message
    }

    try {
      // Store favoriteTips asynchronously to local storage
      await AsyncStorage.setItem('favoriteTips', JSON.stringify(favoriteTips));
      console.log(`Favorite Tips saved! ${favoriteTips}`);
    } catch (error) {
      // TODO: Toast error message
    }
  }

  handleAddTip(tip) {
    const { tipsList } = this.state;
    // TODO: Make sure tip is an Integer
    // https://facebook.github.io/react-native/docs/alert.html

    if (tip === 0 || tipsList.find(t => t === tip)) return;

    // Create new array with requested tip removed
    const newTipsList = [...tipsList, parseInt(tip)].sort((a, b) => a > b);

    // Set state and callback to store in local storage
    this.setState({ tipsList: newTipsList }, this.updateStoredData);
  }

  handleRemoveTip(tip) {
    const { tipsList, favoriteTips } = this.state;

    const newTipsList = tipsList.filter(t => t !== tip);
    const newFavoriteTips = favoriteTips.filter(t => t !== tip);

    // Set state and callback to store in local storage
    this.setState({
      tipsList: newTipsList,
      favoriteTips: newFavoriteTips,
    }, this.updateStoredData);
  }

  handleAddFavoriteTip(tip) {
    const max = 5;
    const { favoriteTips } = this.state;
    // TODO: Make sure tip is an Integer

    if (isNaN(tip) || favoriteTips.length >= max || favoriteTips.find(t => t === tip)) return;

    // Create new array with requested tip removed
    const newFavoriteTips = [...favoriteTips, parseInt(tip)].sort((a, b) => a > b);

    // Set state and callback to store in local storage
    this.setState({ favoriteTips: newFavoriteTips }, this.updateStoredData);
  }

  handleRemoveFavoriteTip(tip) {
    const { favoriteTips } = this.state;

    // Create new array with requested tip removed
    const newFavoriteTips = favoriteTips.filter(t => t !== tip);

    // Set state and callback to store in local storage
    this.setState({ favoriteTips: newFavoriteTips }, this.updateStoredData);
  }

  handleInputChange(text) {
    const { tipInput } = this.state;

    // Empty input would mean 0 value
    const value = text || 0;

    // Format input to allowed values
    const newValue = isNaN(value) || text[0] == '.' || text[1] == '.' ? tipInput : text;
    this.setState({ tipInput: newValue });
  }

  renderTip(tip) {
    return (
      <View style={[styles.item, styles.row]} >
        <Text style={styles.commonText} >{tip}%</Text>
        <View style={styles.row} >
          <Button style={styles.itemButton} handleOnPress={() => this.handleAddFavoriteTip(tip)} >
            <Icon src={require('./../../assets/icons/camera.png')} />
          </Button>
          <Button style={styles.itemButton} handleOnPress={() => this.handleRemoveTip(tip)} >
            <Icon src={require('./../../assets/icons/clear.png')} />
          </Button>
        </View>
      </View>
    );
  }

  renderFavoriteTip(tip) {
    return (
      <View style={[styles.item, styles.row]} >
        <Text style={[styles.commonText, styles.green]} >{tip}%</Text>
        <Button style={styles.itemButton} handleOnPress={() => this.handleRemoveFavoriteTip(tip)} >
          <Icon src={require('./../../assets/icons/clear.png')} />
        </Button>
      </View>
    );
  }

  render() {
    const { tipsList, favoriteTips, tipInput } = this.state;
    const inputValue = parseInt(tipInput || 0);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView >
          {/* favorite tips list */}
          <View style={styles.section}>
            <Text style={styles.title}>Favorite Tips</Text>
            <FlatList
              style={styles.topSpaced}
              data={favoriteTips}
              renderItem={({item}) => this.renderFavoriteTip(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          {/* tips list */}
          <View style={styles.section}>
            <Text style={styles.title}>Tips</Text>
            <View style={styles.row} >
              <View style={[styles.topSpaced, styles.row]} >
                <TextInput style={[styles.input, styles.commonText]}
                  placeholder={'New Tip %'}
                  placeholderTextColor={'#aaa'}
                  keyboardType={'numeric'}
                  value={this.state.tipInput}
                  maxLength={2}
                  onSubmitEditing={() => this.handleAddTip(inputValue)}
                  onChangeText={this.handleInputChange.bind(this)} />
                <Button
                  style={styles.addButton}
                  disabled={inputValue === 0}
                  handleOnPress={() => this.handleAddTip(inputValue)} >
                  <Text style={[styles.commonText, tipInput == 0 ? styles.gray : styles.green]} >
                    Add {inputValue ? `${inputValue}%` : 'Tip'}
                  </Text>
                </Button>
              </View>
            </View>
            <FlatList
              style={styles.topSpaced}
              data={tipsList}
              renderItem={({item}) => this.renderTip(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}