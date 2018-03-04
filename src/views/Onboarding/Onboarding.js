import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, SafeAreaView, Text, View } from 'react-native';

import Button from './../../components/Button/Button';

import { TIP_LIST, FAVORITE_TIP_LIST, FINISHED_ONBOARDING } from './../../utils/constants';

import styles from './Onboarding.styles';

export default class Onboarding extends Component {
  // Hide navigation header
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: true,
  };

  componentDidMount() {
    // Check if this is the user's first time
    this.checkIfFirstTimeUser();
  }

  /**
   * Checks if user has finished onboarding.
   * If they have then navigates to Calculator page.
   *
   */
  async checkIfFirstTimeUser() {
    try {
      const hasFinishedOnboarding = JSON.parse(await AsyncStorage.getItem(FINISHED_ONBOARDING));

      // If not the user's first time
      if (hasFinishedOnboarding) {
        const { navigation } = this.props;
        // Go to calculator page
        navigation.replace('Calculator');
      } else {
        // Otherwise finish loading
        this.setState({ loading: false })
      }
    } catch (e) {
      console.warn(e);
    }
  }

  /**
   * Finishes onboarding by setting items in storage
   *
   */
  async finishOnboarding() {
    try {
      const { navigation } = this.props;
      const tipList = JSON.stringify([15, 18, 20]);
      // Set multiple items at once
      await AsyncStorage.multiSet([
        [TIP_LIST, tipList],
        [FINISHED_ONBOARDING, JSON.stringify(true)],
        [FAVORITE_TIP_LIST, tipList],
      ]);

      // Go to calculator page
      navigation.replace('Calculator');
    } catch (e) {
      console.warn(e);
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.loadingContainer}>
          {
            (loading)
              ? <ActivityIndicator size={'large'} color={'#fff'} />
              : <React.Fragment>
                <Text style={styles.title}>
                  Tiptap
                  </Text>
                <Button style={styles.button} handleOnPress={this.finishOnboarding.bind(this)}>
                  <Text style={styles.btnText}>GET STARTED</Text>
                </Button>
              </React.Fragment>
          }
        </SafeAreaView>
      </View>
    );
  }
}