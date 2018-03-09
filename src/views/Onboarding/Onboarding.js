import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, Text, View } from 'react-native'

import Button from './../../components/Button/Button'

import {
  TIP_LIST,
  FAVORITE_TIP_LIST,
  FINISHED_ONBOARDING
} from './../../utils/constants'

import styles from './Onboarding.styles'

export default class Onboarding extends Component {
  // Hide navigation header
  static navigationOptions = {
    header: null
  }

  /**
   * Finishes onboarding by setting items in storage
   *
   */
  finishOnboarding = async () => {
    try {
      const { navigation } = this.props
      const tipList = JSON.stringify([15, 18, 20])
      // Set multiple items at once
      await AsyncStorage.multiSet([
        [TIP_LIST, tipList],
        [FINISHED_ONBOARDING, JSON.stringify(true)],
        [FAVORITE_TIP_LIST, tipList]
      ])

      // Go to calculator page
      navigation.navigate('App')
    } catch (e) {
      console.warn(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tiptap</Text>
        <Button style={styles.button} handleOnPress={this.finishOnboarding}>
          <Text style={styles.btnText}>GET STARTED</Text>
        </Button>
      </View>
    )
  }
}
