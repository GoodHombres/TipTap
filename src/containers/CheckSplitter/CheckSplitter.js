import React from 'react';
import { SafeAreaView, View, Text, Slider } from 'react-native';
import styles from './CheckSplitter.styles';

// Components
import StackView from './../../components/StackView/StackView';

export default ({ splits, handleOnValueChange }) => (
  <SafeAreaView>
    {/* Tippers slider */}
    <StackView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Split Check</Text>
        <Text style={[styles.label, styles.green]}>{splits || 1}</Text>
      </View>
      <Slider
        value={1}
        step={1}
        minimumValue={1}
        maximumValue={12}
        onValueChange={value => handleOnValueChange(value)}
        minimumTrackTintColor={'#4cd964'}
        maximumTrackTintColor={'rgba(255, 255, 255, 0.06)'}
      />
    </StackView>
  </SafeAreaView>
);
