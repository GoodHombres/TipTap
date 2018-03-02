/**
 * TipTap - CalculatorNumPad
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Components
import Icon from './../../components/Icon/Icon';
import LargeButton from './../../components/LargeButton/LargeButton';

// Styles
import styles from './CalculatorNumPad.styles';

const keyList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '00', '0'];

export default ({ canClear, handleKeyPress, handleCameraPress, handleDeletePress, handleClearPress, handleCalculatePress }) => (
  <View style={styles.container}>
    <View style={styles.row}>

      {/* Empty, Clear & Delete Button */}
      <LargeButton style={styles.column} disabled />
      <LargeButton style={styles.column} handleOnPress={() => handleClearPress()} disabled={!canClear} >
      {
        <Icon size={'md'} src={
          canClear
            ? require('./../../assets/icons/clear.png')
            : require('./../../assets/icons/clear-disabled.png')
        } />
      }
      </LargeButton>
      <LargeButton style={styles.column} handleOnPress={handleDeletePress} disabled={!canClear} >
      {
        <Icon size={'md'} src={
          canClear
            ? require('./../../assets/icons/delete.png')
            : require('./../../assets/icons/delete-disabled.png')
        } />
      }
      </LargeButton>
      {
        /* Number Buttons */
        keyList.map((key, index) => {
          return (
            <LargeButton key={index} style={styles.column} handleOnPress={() => handleKeyPress(key)} >
              <Text style={styles.numText} >{key}</Text>
            </LargeButton>
          );
        })
      }
      {/* Camera Button */}
      <LargeButton style={styles.column} handleOnPress={handleCameraPress} >
        <Icon size={'md'} src={require('./../../assets/icons/camera.png')} />
      </LargeButton>

      {/* Calculate Button */}
      <LargeButton style={styles.full} onPress={handleCalculatePress} disabled={!canClear} >
      {
        <Text style={[styles.numText, canClear ? styles.green : styles.gray]} >Calculate</Text>
      }
      </LargeButton>
    </View>
  </View>
);
