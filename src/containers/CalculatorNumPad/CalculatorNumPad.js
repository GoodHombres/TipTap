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

export default ({ canClear, keyList, handleKeyPress, handleDoubleZeroPress, handleCameraPress, handleDeletePress, handleClearPress, handleCalculatePress }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <View style={styles.keyPadContainer}>
      
        {/* empty, clear, delete */}
        <LargeButton style={styles.key} disabled />
        <LargeButton style={styles.key} handleOnPress={() => handleClearPress()} disabled={!canClear} >
        { 
          canClear ? 
          <Icon src={require('./../../assets/icons/clear.png')} /> :
          <Icon src={require('./../../assets/icons/clear-disabled.png')} />
        }
        </LargeButton>
        <LargeButton style={styles.key} handleOnPress={handleDeletePress} disabled={!canClear} >
        { 
          canClear ? 
          <Icon src={require('./../../assets/icons/delete.png')} /> :
          <Icon src={require('./../../assets/icons/delete-disabled.png')} />
        }
        </LargeButton>

        {/* 7, 8, 9 */}
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(7)} >{7}</LargeButton>
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(8)} >{8}</LargeButton>
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(9)} >{9}</LargeButton>
        
        {/* 4, 5, 6 */}
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(4)} >{4}</LargeButton>
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(5)} >{5}</LargeButton>
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(6)} >{6}</LargeButton>
        
        {/* 1, 2, 3 */}
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(1)} >{1}</LargeButton>
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(2)} >{2}</LargeButton>
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(3)} >{3}</LargeButton>
        
        {/* camera, 0, 00 */}
        <LargeButton style={styles.key} handleOnPress={handleCameraPress} >
        <Icon src={require('./../../assets/icons/camera.png')} />
        </LargeButton>
        <LargeButton style={styles.key} handleOnPress={() => handleKeyPress(0)} >{0}</LargeButton>
        <LargeButton style={styles.key} handleOnPress={handleDoubleZeroPress} >{0}{0}</LargeButton>

        {/* Calculate */}
        <LargeButton style={styles.calculateKey} onPress={handleCalculatePress} disabled={!canClear} >
        {
          canClear
          ? <Text style={styles.calculateText} >Calculate</Text>
          : " "
        }
        </LargeButton>
      </View>
    </View>
  </View>
);
