/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

// Views
import Calculator from './../../views/Calculator/Calculator';

// Routing
const RootStack = StackNavigator(
  // Route Map
  {
    Calculator: { screen: Calculator },
  },
  // Stack Config
  {
    initialRouteName: 'Calculator',
  },
);

// Export Root Stack
export default () => <RootStack />;
