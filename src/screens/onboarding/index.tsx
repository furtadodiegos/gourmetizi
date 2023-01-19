import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { FC } from 'react';

import { AppScreen } from '../../components';
import { useTheme } from '../../contexts';
import type { ScreenNavigationProps } from '../../navigation';

const OnboardingScreen: FC<ScreenNavigationProps<'DrawerNavigation'>> = ({ navigation: { navigate } }) => {
  const { changeTheme } = useTheme();

  const StyledText = styled(Text)`
    ${({ theme: { colors, fonts } }) => css`
      color: ${colors.text};
      ${fonts.title};
    `}
  `;

  return (
    <AppScreen withEdges={['top']}>
      <Text>Onboarding Screen!!</Text>

      <Button onPress={() => navigate('DrawerNavigation', { screen: 'BottomNavigation' })} title="Go to HomeScreen" />

      <TouchableOpacity onPress={changeTheme} style={{ marginVertical: 10, padding: 10, backgroundColor: 'green' }}>
        <StyledText>Change theme</StyledText>
      </TouchableOpacity>
    </AppScreen>
  );
};

export default OnboardingScreen;
