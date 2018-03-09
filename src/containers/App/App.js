/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

// Views
import Calculator from './../../views/Calculator/Calculator';
import Onboarding from './../../views/Onboarding/Onboarding';
import Settings from './../../views/Settings/Settings';
import SnackbarDispatcher from './../../containers/SnackbarDispatcher/SnackbarDispatcher';

// Routing
const RootStack = StackNavigator(
  // Route Map
  {
    Calculator: { screen: Calculator },
    Onboarding: { screen: Onboarding },
    Settings: { screen: Settings },
  },
  // Stack Config
  {
    initialRouteName: 'Onboarding',
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
export default () => <SnackbarDispatcher><RootStack /></SnackbarDispatcher>;
