import React from 'react';
import { TextInput } from 'react-native';

import styles from './Input.styles';

export default ({ keyboardType, maxLength, placeholder, onChangeText, onSubmitEditing, value }) => (
  <TextInput
    style={styles.input}
    keyboardType={keyboardType}
    maxLength={maxLength}
    placeholder={placeholder}
    placeholderTextColor={'#aaa'}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
    value={value}
    returnKeyType={'go'}
  />
);
