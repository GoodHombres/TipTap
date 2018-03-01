/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

// Views
import Calculator from './../../views/Calculator/Calculator';
import Settings from './../../views/Settings/Settings';

// Routing
const RootStack = StackNavigator(
  // Route Map
  {
    Calculator: { screen: Calculator },
    Settings: { screen: Settings },
  },
  // Stack Config
  {
    initialRouteName: 'Calculator',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(246, 247, 249, 0.08)',
        borderBottomColor: 'rgba(246, 247, 249, 0.08)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: '900',
      },
    },
  },
);

// Export Root Stack
export default () => <RootStack />;
