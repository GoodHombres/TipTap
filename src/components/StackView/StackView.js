import React from 'react';
import { View } from 'react-native';

import styles from './StackView.styles';

export default ({ children, style }) => <View style={style ? [styles.container, style] : styles.container}>{children}</View>