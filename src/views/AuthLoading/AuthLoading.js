import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, View } from 'react-native'

import { FINISHED_ONBOARDING } from './../../utils/constants'

import styles from './AuthLoading.styles'

export default class AuthLoading extends Component {
  // Hide navigation header
  static navigationOptions = {
    // header: null,
    title: 'Loading'
  }

  componentDidMount() {
    this._bootstrapAsync()
  }

  /**
   * Checks if user has finished onboarding.
   * If they have then navigates to Calculator page.
   *
   */
  _bootstrapAsync = async () => {
    try {
      const { navigate } = this.props.navigation
      // Fetch if user has finished onboarding
      const hasFinishedOnboarding = JSON.parse(
        await AsyncStorage.getItem(FINISHED_ONBOARDING)
      )
      // Navigate to appropriate place
      navigate(hasFinishedOnboarding ? 'App' : 'Auth')
    } catch (e) {
      console.warn(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#fff'} />
      </View>
    )
  }
}
