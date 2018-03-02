import React from 'react';
import { Image } from 'react-native';

import styles from './Icon.styles';

export default ({ src, size }) => <Image style={size ? styles[size] : styles.sm} source={src} />;
