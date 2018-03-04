/**
 * TipTap - CalculatorHeader
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Components
import Icon from './../../components/Icon/Icon';
import Button from './../../components/Button/Button';
import RadioButton from './../../components/RadioButton/RadioButton';

// Styles
import styles from './CalculatorHeader.styles';

export default ({ tipList, selectedTip, handleSelectTip, handleSettingsPress }) => (
  <SafeAreaView style={styles.container}>
    {
      (tipList && tipList.length)
        // Tips
        ? <View style={styles.tipListContainer}>
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
        // Empty State
        : <Button style={styles.settingsBtn} handleOnPress={handleSettingsPress}>
          <Text style={styles.btnText}>Add favorite tips</Text>
        </Button>
    }
    {/* Settings Button */}
    <Button style={styles.settingsBtn} handleOnPress={handleSettingsPress}>
      <Icon size={'sm'} src={require('./../../assets/icons/settings.png')} />
    </Button>
  </SafeAreaView>
);
