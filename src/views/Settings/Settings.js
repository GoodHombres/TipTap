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

import { TIP_LIST, FAVORITE_TIP_LIST, FINISHED_ONBOARDING } from './../../utils/constants';

// Set input type based on Platform
const tipInputType = Platform.select({
  android: 'numeric',
  ios: 'number-pad',
});

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor() {
    super();

    this.state = {
      tip: null,
      tipList: null,
      favoriteTips: null,
    };

    // Bindings
    this.resetStore = this.resetStore.bind(this);
    this.handleResetApp = this.handleResetApp.bind(this);
    this.handleCreateTip = this.handleCreateTip.bind(this);
    this.handleDeleteTip = this.handleDeleteTip.bind(this);
    this.isInFavoriteList = this.isInFavoriteList.bind(this);
    this.handleAddFavoriteTip = this.handleAddFavoriteTip.bind(this);
    this.handleRemoveFavoriteTip = this.handleRemoveFavoriteTip.bind(this);
  }

  componentDidMount() {
    // Retrieve saved data
    this.getTipList();
  }

  componentWillUnmount() {
    // Store saved data
    this.storeTipLists();
  }

  /**
   * Gets tiplist
   *
   */
  async getTipList() {
    try {
      const stores = await AsyncStorage.multiGet([TIP_LIST, FAVORITE_TIP_LIST]);
      const [tipListDict, favoriteListDict] = stores;

      const tipList = JSON.parse(tipListDict[1]);
      const favoriteTips = JSON.parse(favoriteListDict[1]);

      this.setState({ tipList, favoriteTips });
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Update tip list in disk
   *
   */
  async storeTipLists() {
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

  async resetStore() {
    try {
      const { navigation } = this.props;

      await AsyncStorage.multiRemove([
        TIP_LIST,
        FAVORITE_TIP_LIST,
        FINISHED_ONBOARDING,
      ]);

      // Go to onboarding page
      navigation.replace('Onboarding');
    } catch (e) {
      console.warn(e);
    }
  }

  handleResetApp() {
    Alert.alert(
      'Reset TipTap',
      'Are you sure you want to reset TipTap? All data will be lost.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Reset', onPress: () => this.resetStore(), style: 'destructive' },
      ],
    );
  }

  /**
   * Creates new tip and adds it to list
   *
   */
  handleCreateTip() {
    const { tip, tipList } = this.state;

    // If no tip or it's not a number exit
    if (!tip || isNaN(tip)) return;

    // TODO: toast with warning
    // If maxed out then return
    if (tipList && tipList.length > 9) return;

    // If tipList has items
    if (tipList && tipList.length) {
      // Filter to find item
      const exists = tipList.filter(t => t === tip);

      // If tip already exists exit
      if (exists.length) return;
    }

    // If existing list
    const newTipList = (tipList && tipList.length)
      // Add to list and sort
      ? [parseInt(tip, 10), ...tipList].sort((a, b) => a > b)
      // Otherwise add to list
      : [parseInt(tip, 10)];

    // Update state
    this.setState({ tip: null, tipList: newTipList });
  }

  /**
   * Deletes tip from both lists
   */
  handleDeleteTip(tip) {
    const { tipList, favoriteTips } = this.state;

    // Filter out tip from list
    const newTipList = tipList.filter(t => tip !== t);
    // If there is a list of favorites
    const newFaveTipList = (favoriteTips && favoriteTips.length)
      // Filter out tip from list
      ? favoriteTips.filter(t => tip !== t)
      // Otherwise return list
      : favoriteTips;

    // Update state with tips
    this.setState({ tipList: newTipList, favoriteTips: newFaveTipList});
  }

  /**
   * Adds tip to favorite's list
   *
   * @param {number} tip
   */
  handleAddFavoriteTip(tip) {
    const { favoriteTips } = this.state;

    // TODO: toast with warning
    // If maxed out then return
    if (favoriteTips && favoriteTips.length > 4) return;

    // If favorite tips exist
    if (favoriteTips && favoriteTips.length) {
      // Make sure it isn't already included in list
      // Filter to find item
      const exists = favoriteTips.filter(t => t === tip);

      // If tip already exists exit
      if (exists.length) return;
    }

    // If favorite states already exists
    const newFavoriteTips = (favoriteTips && favoriteTips.length)
      // Add tip and sort
      ? [tip, ...favoriteTips].sort().sort((a, b) => a > b)
      // Otherwise create array with tip
      : [tip];

    // Update state
    this.setState({ favoriteTips: newFavoriteTips});
  }

  /**
   * Remove tip from favorite's list
   *
   * @param {number} tip
   */
  handleRemoveFavoriteTip(tip) {
    const { favoriteTips } = this.state;

    // If favorite tips is an array
    if (favoriteTips && favoriteTips.length) {
      // Filter out tips
      this.setState({ favoriteTips: favoriteTips.filter(t => tip !== t) });
    }
  }

  /**
   * Checks if tip is in favorite's list
   *
   * @param {number} tip
   * @returns
   */
  isInFavoriteList(tip) {
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
  renderTip(tip) {
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
  renderFavoriteTip(tip) {
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
    const { tip, tipList, favoriteTips } = this.state;
    const validTipInput = tip && !isNaN(tip) && (100 > tip) && (tipList && tipList.length <= 9);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Text Input */}
          <ListItem>
            <StackView style={styles.full}>
              <InputLabel>Tip %</InputLabel>
              <Input
                maxLength={2}
                value={`${tip || ''}`}
                keyboardType={tipInputType}
                placeholder={'Enter tip percentage'}
                onChangeText={(text) => this.setState({ tip: parseInt(text) || null })}
              />
            </StackView>
            {/* Create tip button */}
            <Button style={styles.createButton} disabled={!validTipInput} handleOnPress={this.handleCreateTip}>
              <Icon size={'xs'} src={validTipInput ? require('./../../assets/icons/add.png') : require('./../../assets/icons/add-disabled.png')} />
            </Button>
          </ListItem>
          {/* Tip Hint */}
          {
            (tip) && <Text style={[styles.inputHint, (validTipInput) ? styles.valid : styles.invalid]}>Must be a two-digit number</Text>
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
