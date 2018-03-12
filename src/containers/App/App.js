/**
 * TipTap - Tip Calculator
 * https://github.com/GoodHombres/TipTap
 * @flow
 */

import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

// Views
import Detail from './../../views/Detail/Detail';
import Settings from './../../views/Settings/Settings';
import Calculator from './../../views/Calculator/Calculator';
import Onboarding from './../../views/Onboarding/Onboarding';
import AuthLoading from './../../views/AuthLoading/AuthLoading';
import SnackbarDispatcher from './../../containers/SnackbarDispatcher/SnackbarDispatcher';

// Routing
const AppStack = StackNavigator(
  // Route Map
  {
    Calculator: { screen: Calculator },
    Settings: { screen: Settings },
    Detail: { screen: Detail },
  },
  // Stack Config
  {
    initialRouteName: 'Calculator',
    mode: 'modal',
    navigationOptions: {
      headerBackImage: require('./../../assets/icons/close.png'),
      headerBackTitle: 'Close',
      headerStyle: {
        backgroundColor: '#161616',
        borderBottomColor: '#161616',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
      },
    },
  }
);

const OnboardingStack = StackNavigator({ Onboarding: { screen: Onboarding } });

const App = SwitchNavigator(
  {
    App: { screen: AppStack },
    Auth: { screen: OnboardingStack },
    AuthLoading: { screen: AuthLoading },
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

// Export Root Stack
export default () => (
  <SnackbarDispatcher>
    <App />
  </SnackbarDispatcher>
);
