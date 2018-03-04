import React from 'react';
import { Text } from 'react-native';

import styles from './InputLabel.styles';

export default ({ children }) => <Text style={styles.label}>{children}</Text>;
