import React from 'react';
import { Text } from 'react-native';

import Icon from './../Icon/Icon';
import Button from './../Button/Button';

import styles from './BackButton.styles';

export default ({ navigation }) => (
  <Button style={styles.backButton} handleOnPress={() => navigation.goBack()}>
    <Text style={styles.backButtonText}>
      <Icon size={'xs'} src={require('./../../assets/icons/close.png')} />
      Close
    </Text>
  </Button>
);
