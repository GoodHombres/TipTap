import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import Container from '../components/Container';

import { Route } from '../routes';
import { Color } from '../styles/colors';

const ButtonText = styled.Text`
  color: ${Color.Green};
  font-weight: bold;
  padding-vertical: 10px;
  text-transform: uppercase;
`;

type Props = {
  navigation: NavigationStackProp;
};

const Onboarding = (props: Props) => {
  const handleOnPress = () => {
    const { navigate } = props.navigation;
    navigate(Route.App);
  };

  return (
    <Container>
      <Text>Onboarding</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <ButtonText>Go to App</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};

export default Onboarding;
