import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Screens
import BillDetail from './screens/BillDetail';
import Calculator from './screens/Calculator';
import Onboarding from './screens/Onboarding';
import Settings from './screens/Settings';
import Start from './screens/Start';

import { Route } from './routes';

const appStack = {
  [Route.Calculator]: { screen: Calculator },
  [Route.Settings]: { screen: Settings },
  [Route.BillDetail]: { screen: BillDetail },
};

const AppStack = createStackNavigator(appStack, {
  headerMode: 'none',
  initialRouteName: Route.Calculator,
  mode: 'modal',
});

const routes = {
  [Route.App]: AppStack,
  [Route.Start]: Start,
  [Route.Onboarding]: Onboarding,
};

const AppContainer = createAppContainer(
  createSwitchNavigator(routes, {
    initialRouteName: Route.Start,
  }),
);

const UI = () => <AppContainer />;

export default UI;
