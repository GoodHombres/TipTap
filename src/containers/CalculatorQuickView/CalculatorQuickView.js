import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styles from './CalculatorQuickView.styles'

import USD from './../../utils/convertUSD'
import calculateTip from './../../utils/calculateTip'
import calculateTotal from './../../utils/calculateTotal'

export default ({ amountEntered, selectedTip }) => (
  <SafeAreaView style={styles.container}>
    {/* Amount Entered */}
    <Text style={styles.billText}>
      <Text style={styles.superscriptBig}>$</Text>
      {USD(amountEntered)}
    </Text>
    {/* Row */}
    <View style={styles.row}>
      {/* Tip */}
      <View style={styles.stackView}>
        <Text style={styles.label}>Tip</Text>
        <Text
          style={
            amountEntered && selectedTip
              ? styles.specialText
              : [styles.specialText, styles.emptyText]
          }>
          <Text style={styles.superscript}>$</Text>
          {USD(calculateTip(amountEntered, selectedTip))}
        </Text>
      </View>
      {/* Total */}
      <View style={styles.stackView}>
        <Text style={styles.label}>Total</Text>
        <Text
          style={
            amountEntered && selectedTip
              ? styles.specialText
              : [styles.specialText, styles.emptyText]
          }>
          <Text style={styles.superscript}>$</Text>
          {USD(calculateTotal(amountEntered, selectedTip))}
        </Text>
      </View>
    </View>
  </SafeAreaView>
)
