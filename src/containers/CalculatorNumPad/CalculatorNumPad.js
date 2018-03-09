/**
 * TipTap - CalculatorNumPad
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Components
import Icon from './../../components/Icon/Icon';
import Button from './../../components/Button/Button';

// Styles
import styles from './CalculatorNumPad.styles';

const numberList = [
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  null,
  '0',
  '00'
];

export default ({
  amountEntered,
  canClear,
  selectedTip,
  handleClearPress,
  handleDeletePress,
  handleKeyPress,
  handleNavigation
}) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.row}>
      {/* Camera Button */}
      <Button
        style={styles.column}
        disabled
        handleOnPress={() => handleNavigation(null)}>
        {/* <Icon size={'md'} src={require('./../../assets/icons/camera.png')} /> */}
      </Button>
      {/* Clear Button */}
      <Button
        style={styles.column}
        handleOnPress={() => handleClearPress()}
        disabled={!canClear}>
        {
          <Icon
            size={'md'}
            src={
              canClear
                ? require('./../../assets/icons/clear.png')
                : require('./../../assets/icons/clear-disabled.png')
            }
          />
        }
      </Button>
      {/* Delete Button */}
      <Button
        style={styles.column}
        handleOnPress={handleDeletePress}
        disabled={!canClear}>
        {
          <Icon
            size={'md'}
            src={
              canClear
                ? require('./../../assets/icons/delete.png')
                : require('./../../assets/icons/delete-disabled.png')
            }
          />
        }
      </Button>
      {/* Number Buttons */
      numberList.map((number, index) => {
        return (
          <Button
            key={index}
            style={styles.column}
            disabled={!number}
            handleOnPress={() => handleKeyPress(number)}>
            <Text style={styles.text}>{number}</Text>
          </Button>
        );
      })}
      {/* Calculate Button */}
      <Button
        style={styles.full}
        handleOnPress={() =>
          handleNavigation('Detail', { amountEntered, selectedTip })
        }
        disabled={!canClear}>
        <Text style={[styles.text, canClear ? styles.green : styles.gray]}>
          Calculate
        </Text>
      </Button>
    </SafeAreaView>
  </View>
);
