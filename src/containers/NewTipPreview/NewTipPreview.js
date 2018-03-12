import React, { Component } from 'react';

import { FlatList, ScrollView, Text, View } from 'react-native';

import Icon from './../../components/Icon/Icon';
import Button from './../../components/Button/Button';
import ListItem from './../../components/ListItem/ListItem';
import ListItemActions from './../../components/ListItemActions/ListItemActions';

import styles from './NewTipPreview.styles';

export default class NewTipPreview extends Component {
  /**
   * Renders tip list item
   *
   * @param {number} tip
   */
  renderTip = tip => {
    return (
      <ListItem>
        <Text style={styles.itemText}>{tip}%</Text>
        <ListItemActions>
          <Button style={styles.itemButton} handleOnPress={null}>
            <Icon
              size={'xs'}
              src={require('./../../assets/icons/add-green.png')}
            />
          </Button>
          <Button style={styles.itemButton} handleOnPress={() => null}>
            <Icon
              size={'xs'}
              src={require('./../../assets/icons/cancel.png')}
            />
          </Button>
        </ListItemActions>
      </ListItem>
    );
  };

  /**
   * Renders favorite tip list item
   *
   * @param {number} tip
   */
  renderFavoriteTip = tip => {
    return (
      <ListItem>
        <Text style={styles.itemText}>{tip}%</Text>
        <ListItemActions>
          <Button style={styles.itemButton} handleOnPress={() => null}>
            <Icon
              size={'xs'}
              src={require('./../../assets/icons/cancel.png')}
            />
          </Button>
        </ListItemActions>
      </ListItem>
    );
  };

  render() {
    const tipList = [10, 15, 18, 20];

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Customize Tips</Text>
          <Text style={styles.text}>
            Create your own custom tips and favorite them for quick access.
          </Text>
        </View>
        <ScrollView style={styles.secondary}>
          <FlatList
            data={tipList}
            ListHeaderComponent={() => (
              <Text style={styles.sectionTitle}>Favorites</Text>
            )}
            renderItem={({ item }) => this.renderFavoriteTip(item)}
            keyExtractor={(item, index) => index.toString()}
          />
          <FlatList
            data={tipList}
            ListHeaderComponent={() => (
              <Text style={styles.sectionTitle}>Tips</Text>
            )}
            renderItem={({ item }) => this.renderTip(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
