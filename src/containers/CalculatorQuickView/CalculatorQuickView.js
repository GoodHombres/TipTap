import React from 'react';
import { Text, View } from 'react-native';
import styles from './CalculatorQuickView.styles';

import calculateTip from './../../utils/calculateTip';
import calculateTotal from './../../utils/calculateTotal';

export default({ amountEntered, selectedTip }) => (
  <View style={styles.container}>
    {/* Amount Entered */}
    <Text style={styles.billText}>
      <Text style={styles.superscriptBig}>$</Text>
      {amountEntered}
    </Text>
    {/* Row */}
    <View style={styles.row}>
      {/* Tip */}
      <View style={styles.stackView}>
        <Text style={styles.label}>Tip</Text>
        {
          // If amount has been entered
          (amountEntered)
            // Display calculation
            ? <Text style={styles.specialText}>
                <Text style={styles.superscript}>$</Text>
                {calculateTip(amountEntered, selectedTip)}
              </Text>
            // Otherwise no calculation
            : <Text style={[styles.specialText, styles.emptyText]}>
                <Text style={styles.superscript} />
                N/A
              </Text>
        }
      </View>
      {/* Total */}
      <View style={styles.stackView}>
        <Text style={styles.label}>Total</Text>
        {
          // If amount has been entered
          (amountEntered)
            // Display calculation
            ? <Text style={styles.specialText}>
                <Text style={styles.superscript}>$</Text>
                {calculateTotal(amountEntered, selectedTip)}
              </Text>
            // Otherwise no calculation
            : <Text style={[styles.specialText, styles.emptyText]}>
                <Text style={styles.superscript} />
                N/A
              </Text>
        }
      </View>
    </View>
  </View>
);
