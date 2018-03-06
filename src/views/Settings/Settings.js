import React, { Component } from 'react';
import { Alert, AsyncStorage, Text, View, SafeAreaView, ScrollView, FlatList, Platform } from 'react-native';

import Icon from './../../components/Icon/Icon';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
import ListItem from './../../components/ListItem/ListItem';
import StackView from './../../components/StackView/StackView';
import InputLabel from './../../components/InputLabel/InputLabel';
import ListItemActions from './../../components/ListItemActions/ListItemActions';

import styles from './Settings.styles';

import { TIP_LIST, FAVORITE_TIP_LIST, FINISHED_ONBOARDING, SELECTED_TIP } from './../../utils/constants';
import isValidTip from './../../utils/isValidTip';

// Set input type based on Platform
const tipInputType = Platform.select({
  android: 'numeric',
  ios: 'number-pad',
});

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  state = {
    tip: null,
    tipList: [],
    favoriteTips: [],
    validTipInput: false,
  }

  componentDidMount() {
    // Retrieve saved data
    this.getTipList();
  }

  /**
   * Gets tiplist
   *
   */
  getTipList = async () => {
    try {
      const stores = await AsyncStorage.multiGet([TIP_LIST, FAVORITE_TIP_LIST]);
      const [tipListDict, favoriteListDict] = stores;

      const tipList = JSON.parse(tipListDict[1]) || [];
      const favoriteTips = JSON.parse(favoriteListDict[1]) || [];

      this.setState({ tipList, favoriteTips });
    } catch (e) {
      console.warn(e);
    }
  };

  /**
   * Update tip list in disk
   *
   */
  storeTipLists = async () => {
    try {
      const { tipList, favoriteTips } = this.state;

      // Set items
      await AsyncStorage.multiSet([
        [TIP_LIST, JSON.stringify(tipList)],
        [FAVORITE_TIP_LIST, JSON.stringify(favoriteTips)],
      ]);
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Update favorite list in disk
   *
   */
  storeFavoritesList = async () => {
    try {
      const { favoriteTips } = this.state;

      // Set items
      await AsyncStorage.setItem(FAVORITE_TIP_LIST, JSON.stringify(favoriteTips));
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Deletes app stored data
   *
   */
  resetStore = async () => {
    try {
      const { navigation } = this.props;

      await AsyncStorage.multiRemove([
        TIP_LIST,
        FAVORITE_TIP_LIST,
        FINISHED_ONBOARDING,
        SELECTED_TIP,
      ]);

      // Go to onboarding page
      navigation.replace('Onboarding');
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Warns and prompts user for app data delete confirmation
   *
   */
  handleResetApp = () => {
    Alert.alert(
      'Reset TipTap',
      'Are you sure you want to reset TipTap? All data will be lost.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reset', onPress: () => this.resetStore(), style: 'destructive' },
      ],
    );
  }

  /**
   * Creates new tip and adds it to list
   *
   */
  handleCreateTip = () => {
    const { tip, tipList } = this.state;

    // If no tip or it's not a number exit
    if (!tip || isNaN(tip)) return;

    // TODO: toast with warning
    // If maxed out then return
    if (tipList.length > 9) return;

    // If there are tips in list
    if (tipList.length) {

      // Make sure it isn't already included in list
      const exists = tipList.find(t => t === tip);

      // If tip already exists exit
      if (exists) return;

      const newTipList = [parseInt(tip, 10), ...tipList].sort((a, b) => a > b);
      // Update state
      this.setState({ tip: null, tipList: newTipList }, this.storeTipLists);

    } else {

      const newTipList = [parseInt(tip, 10)];
      // Update state
      this.setState({ tip: null, tipList: newTipList }, this.storeTipLists);
    }
  }

  /**
   * Deletes tip from both lists
   *
   * @param {number} tip
   */
  handleDeleteTip = (tip) => {
    const { tipList, favoriteTips } = this.state;

    // If there are tips in list
    if (tipList.length) {

      // Filter out tip from list
      const newTipList = tipList.filter(t => tip !== t);
      // Filter out tip from favorites
      const newFaveTipList = favoriteTips.filter(t => tip !== t);

      // Update state with tips
      this.setState({ tipList: newTipList, favoriteTips: newFaveTipList }, this.storeTipLists);
    }
  }

  /**
   * Adds tip to favorite's list
   *
   * @param {number} tip
   */
  handleAddFavoriteTip = (tip) => {
    const { favoriteTips } = this.state;

    // TODO: toast with warning
    // If maxed out then return
    if (favoriteTips.length > 4) return;

    if (favoriteTips.length) {

      // Make sure it isn't already included in list
      const exists = favoriteTips.find(t => t === tip);

      // If tip already exists exit
      if (exists) return;

      // Create a sorted list with new tip added
      const newFavoriteTips = [tip, ...favoriteTips].sort((a, b) => a > b);

      // Update state
      this.setState({ favoriteTips: newFavoriteTips }, this.storeFavoritesList);
    } else {

      // Create a list with new tip added
      const newFavoriteTips = [tip];

      // Update state
      this.setState({ favoriteTips: newFavoriteTips }, this.storeFavoritesList);
    }
  }

  /**
   * Remove tip from favorite's list
   *
   * @param {number} tip
   */
  handleRemoveFavoriteTip = (tip) => {
    const { favoriteTips } = this.state;

    // If there are favorite tips
    if (favoriteTips.length) {
      // Filter out tips
      this.setState({ favoriteTips: favoriteTips.filter(t => tip !== t) }, this.storeFavoritesList);
    }
  }

  /**
   * Updates and validates input text
   *
   * @param  {string} text
   * @returns
   */
  handleInputChange = (text) => {
    const { tipList } = this.state;

    // Validate input
    const validTipInput = isValidTip(text);

    // Validate
    this.setState({ tip: validTipInput ? parseInt(text, 10) : null, validTipInput });
  }

  /**
   * Checks if tip is in favorite's list
   *
   * @param {number} tip
   * @returns
   */
  isInFavoriteList = (tip) => {
    const { favoriteTips } = this.state;

    if (favoriteTips && favoriteTips.length) {
      const exists = favoriteTips.filter(t => t === tip);

      return exists.length;
    }

    return false;
  }

  /**
   * Renders tip list item
   *
   * @param {number} tip
   */
  renderTip = (tip) => {
    const isFaved = this.isInFavoriteList(tip);

    return (
      <ListItem>
        <Text style={styles.itemText} >{tip}%</Text>
        <ListItemActions>
          <Button style={styles.itemButton} handleOnPress={isFaved ? () => this.handleRemoveFavoriteTip(tip) : () => this.handleAddFavoriteTip(tip)} >
            <Icon size={'xs'} src={isFaved ? require('./../../assets/icons/add-green.png') : require('./../../assets/icons/add.png')} />
          </Button>
          <Button style={styles.itemButton} handleOnPress={() => this.handleDeleteTip(tip)} >
            <Icon size={'xs'} src={require('./../../assets/icons/cancel.png')} />
          </Button>
        </ListItemActions>
      </ListItem>
    );
  }

  /**
   * Renders favorite tip list item
   *
   * @param {number} tip
   */
  renderFavoriteTip = (tip) => {
    return (
      <ListItem>
        <Text style={styles.itemText} >{tip}%</Text>
        <ListItemActions>
          <Button style={styles.itemButton} handleOnPress={() => this.handleRemoveFavoriteTip(tip)} >
            <Icon size={'xs'} src={require('./../../assets/icons/cancel.png')} />
          </Button>
        </ListItemActions>
      </ListItem>
    );
  }

  render() {
    const { tip, tipList, favoriteTips, validTipInput } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Text Input */}
          <ListItem>
            <StackView style={styles.full}>
              <InputLabel>Tip %</InputLabel>
              <Input
                maxLength={3}
                value={`${tip || ''}`}
                keyboardType={tipInputType}
                placeholder={'Enter tip percentage'}
                onChangeText={(text) => this.handleInputChange(text)}
              />
            </StackView>
            {/* Create tip button */}
            <Button style={styles.createButton} disabled={!validTipInput} handleOnPress={this.handleCreateTip}>
              <Icon size={'xs'} src={validTipInput ? require('./../../assets/icons/add.png') : require('./../../assets/icons/add-disabled.png')} />
            </Button>
          </ListItem>
          {/* Tip Hint */}
          {
            (tip) && <Text style={styles.inputHint}>Must be a three-digit number</Text>
          }
          {/* Favorite List */}
          <Text style={styles.title}>Favorite Tips</Text>
          <FlatList
            data={favoriteTips}
            ListEmptyComponent={() => <Text style={styles.emptyText}>No favorite tips</Text>}
            ListHeaderComponent={() => <Text style={styles.sectionTitle}>Favorites</Text>}
            renderItem={({ item }) => this.renderFavoriteTip(item)}
            keyExtractor={(item, index) => index.toString()}
          />
          {/* Tip List */}
          <Text style={styles.title}>Tips</Text>
          <FlatList
            data={tipList}
            extraData={favoriteTips}
            ListEmptyComponent={() => <Text style={styles.emptyText}>No tips</Text>}
            ListHeaderComponent={() => <Text style={styles.sectionTitle}>Tips</Text>}
            renderItem={({ item }) => this.renderTip(item)}
            keyExtractor={(item, index) => index.toString()}
          />
          {/* Clear Button */}
          <Button style={styles.danger} handleOnPress={this.handleResetApp}>
            <Text style={styles.dangerText}>Reset</Text>
          </Button>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
