import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import styles from './ListItem.styles';

export default ({ children, handleOnPress, style }) => {
  return handleOnPress ? (
    <TouchableHighlight onPress={handleOnPress}>
      <View style={style ? [styles.container, ...style] : styles.container}>
        {children}
      </View>
    </TouchableHighlight>
  ) : (
    <View style={style ? [styles.container, ...style] : styles.container}>
      {children}
    </View>
  );
};
