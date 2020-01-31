/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare var global: {HermesInternal: null | {}};

const StyledScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const StyledBody = styled.View`
  background-color: ${Colors.white};
`;

const StyledEngine = styled.View`
  position: absolute;
  right: 0;
`;

const StyledFooter = styled.Text`
  color: ${Colors.dark};
  font-size: 12px;
  font-weight: 600;
  padding: 4px;
  padding-right: 12px;
  text-align: right;
`;

const StyledSectionContainer = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const StyledSectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.black};
`;

const StyledSectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const StyledHighlight = styled.Text`
  font-weight: 700;
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <StyledScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          {global.HermesInternal == null ? null : (
            <StyledEngine>
              <StyledFooter>Engine: Hermes</StyledFooter>
            </StyledEngine>
          )}
          <StyledBody>
            <StyledSectionContainer>
              <StyledSectionTitle>Step One</StyledSectionTitle>
              <StyledSectionDescription>
                Edit <StyledHighlight>App.tsx</StyledHighlight> to change this
                screen and then come back to see your edits.
              </StyledSectionDescription>
            </StyledSectionContainer>
            <StyledSectionContainer>
              <StyledSectionTitle>See Your Changes</StyledSectionTitle>
              <StyledSectionDescription>
                <ReloadInstructions />
              </StyledSectionDescription>
            </StyledSectionContainer>
            <StyledSectionContainer>
              <StyledSectionTitle>Debug</StyledSectionTitle>
              <StyledSectionDescription>
                <DebugInstructions />
              </StyledSectionDescription>
            </StyledSectionContainer>
            <StyledSectionContainer>
              <StyledSectionTitle>Learn More</StyledSectionTitle>
              <StyledSectionDescription>
                Read the docs to discover what to do next:
              </StyledSectionDescription>
            </StyledSectionContainer>
            <LearnMoreLinks />
          </StyledBody>
        </StyledScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
