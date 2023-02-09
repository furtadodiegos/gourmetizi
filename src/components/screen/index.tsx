import React from 'react';
import { StatusBar } from 'react-native';
import type { FC, PropsWithChildren } from 'react';
import type { StatusBarStyle, StyleProp, ViewProps, ViewStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

import { useTheme } from '../../contexts';
import { StyledSafeAreaView, StyledView } from './screen.style';
import type { StyledSafeAreaViewProps } from './screen.style';

interface AppScreenProps extends ViewProps, StyledSafeAreaViewProps {
  barStyle?: StatusBarStyle;
  style?: StyleProp<ViewStyle> | undefined;
  withEdges?: Edge[];
}

const AppScreen: FC<PropsWithChildren<AppScreenProps>> = ({ children, barStyle, style, withEdges = [], ...props }) => {
  const { isDarkMode } = useTheme();

  return (
    <StyledSafeAreaView {...props} edges={['right', 'left'].concat(withEdges) as Edge[]}>
      <StatusBar barStyle={barStyle || (isDarkMode ? 'light-content' : 'dark-content')} />

      <StyledView style={[style]}>{children}</StyledView>
    </StyledSafeAreaView>
  );
};

export default AppScreen;
