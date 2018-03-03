import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Button.styles';

export default ({ children, style, handleOnPress, isSelected, disabled }) => (
  <TouchableOpacity
    style={[ style, isSelected ? [styles.container, styles.selected] : styles.container ] }
    onPress={handleOnPress}
    disabled={disabled}
  >
  {children}
  </TouchableOpacity>
);