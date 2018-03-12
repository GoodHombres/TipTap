import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
  ActivityIndicator,
  AsyncStorage,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import Icon from './../../components/Icon/Icon';
import Button from './../../components/Button/Button';
import NewTipPreview from './../../containers/NewTipPreview/NewTipPreview';
import QuickTipPreview from './../../containers/QuickTipPreview/QuickTipPreview';
import CheckSplitPreview from './../../containers/CheckSplitPreview/CheckSplitPreview';

import {
  TIP_LIST,
  FAVORITE_TIP_LIST,
  FINISHED_ONBOARDING,
} from './../../utils/constants';

import styles from './Onboarding.styles';

export default class Onboarding extends Component {
  // Hide navigation header
  static navigationOptions = {
    header: null,
  };

  /**
   * Finishes onboarding by setting items in storage
   *
   */
  finishOnboarding = async () => {
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
      navigation.navigate('App');
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.skipContainer}>
          <Button
            style={styles.skipButton}
            handleOnPress={this.finishOnboarding}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </Button>
        </View>
        <Swiper
          showButtons
          loop={false}
          autoplay={true}
          autoplayTimeout={5}
          dotColor={'rgba(246, 247, 249, 0.3)'}
          activeDotColor={'#4cd964'}>
          <View>
            <View style={styles.main}>
              <View style={styles.icon}>
                <Icon
                  size={'xl'}
                  src={require('./../../assets/icons/icon.png')}
                />
              </View>
              <Text style={styles.title}>TipTap</Text>
              <Text style={styles.text}>Tip calculations made simple</Text>
            </View>
          </View>
          <QuickTipPreview />
          <NewTipPreview />
          <CheckSplitPreview />
          <View style={styles.main}>
            <View style={styles.icon}>
              <Icon
                size={'xl'}
                src={require('./../../assets/icons/icon.png')}
              />
            </View>
            <Text style={styles.title}>TipTap</Text>
            <Text style={styles.text}>Don't forget to tip!</Text>
            <Button style={styles.button} handleOnPress={this.finishOnboarding}>
              <Text style={styles.btnText}>Get Started</Text>
            </Button>
          </View>
        </Swiper>
      </View>
    );
  }
}
