import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './CalculatorQuickView.styles';

import USD from './../../utils/convertUSD';
import calculateTip from './../../utils/calculateTip';
import calculateTotal from './../../utils/calculateTotal';

export default ({ amountEntered, selectedTip, splits }) => (
  <SafeAreaView style={styles.container}>
    {/* Amount Entered */}
    <Text style={styles.billText}>
      <Text style={styles.superscriptBig}>$</Text>
      {USD(amountEntered)}
    </Text>
    {/* Row */}
    <View style={styles.row}>
      {/* Tip Percent */}
      <View style={styles.stackView}>
        <Text style={styles.label}>Tip</Text>
        <Text
          style={
            amountEntered && selectedTip
              ? styles.specialText
              : [styles.specialText, styles.emptyText]
          }>
          {selectedTip || '0'}
          <Text
            style={
              amountEntered && selectedTip
                ? styles.superscript
                : [styles.superscript, styles.emptyText]
            }>
            %
          </Text>
        </Text>
      </View>
      {/* Tip */}
      <View style={styles.stackView}>
        <Text style={styles.label}>Tip Amount</Text>
        <Text
          style={
            amountEntered && selectedTip
              ? styles.specialText
              : [styles.specialText, styles.emptyText]
          }>
          <Text
            style={
              amountEntered && selectedTip
                ? styles.superscript
                : [styles.superscript, styles.emptyText]
            }>
            $
          </Text>
          {USD(calculateTip(amountEntered, selectedTip, splits || 1))}
        </Text>
      </View>
      {/* Total */}
      <View style={styles.stackView}>
        <Text style={styles.label}>Total Amount</Text>
        <Text
          style={
            amountEntered && selectedTip
              ? styles.specialText
              : [styles.specialText, styles.emptyText]
          }>
          <Text
            style={
              amountEntered && selectedTip
                ? styles.superscript
                : [styles.superscript, styles.emptyText]
            }>
            $
          </Text>
          {USD(calculateTotal(amountEntered, selectedTip, splits || 1))}
        </Text>
      </View>
    </View>
  </SafeAreaView>
);
