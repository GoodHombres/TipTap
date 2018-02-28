/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

// Screens
import Home from './../Home/Home';

// Routing
const RootStack = StackNavigator(
  // Route Map
  {
    Home: { screen: Home },
  },
  // Stack Config
  {
    initialRouteName: 'Home',
  },
);

// Export Root Stack
export default () => <RootStack />;
