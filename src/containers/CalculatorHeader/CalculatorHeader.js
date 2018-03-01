/**
 * TipTap - CalculatorHeader
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Components
import Icon from './../../components/Icon/Icon';
import RadioButton from './../../components/RadioButton/RadioButton';

// Styles
import styles from './CalculatorHeader.styles';

export default ({ tipList, selectedTip, handleSelectTip, handleSettingsPress }) => (
  <View style={styles.container}>
    <View style={styles.tipListContainer}>
      {
        tipList.map((tip, index) => {
          return (
            <RadioButton
              key={index}
              isSelected={selectedTip === tip}
              handleOnPress={() => handleSelectTip(tip)}
            >
            {tip}
            <Text style={styles.superscript}>%</Text>
          </RadioButton>
          );
        })
      }
    </View>
    {/* Settings Button */}
    <TouchableOpacity style={styles.settingsBtn} onPress={handleSettingsPress}>
      <Icon src={require('./../../assets/icons/settings.png')} />
    </TouchableOpacity>
  </View>
);
