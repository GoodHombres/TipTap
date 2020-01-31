import React, { useEffect } from 'react';

import { Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Container from '../components/Container';
import { Route } from '../routes';

type Props = {
  navigation: NavigationStackProp;
};

const Start = (props: Props) => {
  const { navigation } = props;

  useEffect(() => {
    // @TODO: integrate with Context, for now just navigate to Onboarding on init
    navigation.navigate(Route.Onboarding);
  }, [navigation]);

  return (
    <Container>
      <Text>SplashScreen</Text>
    </Container>
  );
};

export default Start;
