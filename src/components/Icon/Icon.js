import React from 'react';
import { Image } from 'react-native';

import styles from './Icon.styles';

export default ({ src }) => <Image style={styles.icon} source={src} />;
