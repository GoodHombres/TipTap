import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './RadioButton.styles';

export default ({ children, handleOnPress, isSelected }) => (
  <TouchableOpacity
    style={isSelected ? [styles.container, styles.selected] : styles.container}
    onPress={handleOnPress}>
    <Text
      style={[
        styles.text,
        isSelected ? styles.selectedText : styles.defaultText,
      ]}>
      {children}
    </Text>
  </TouchableOpacity>
);
